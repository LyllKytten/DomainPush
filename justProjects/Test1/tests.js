let formDef = []
let variants = []

const formDef1=
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'dropdown',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {caption:'Опубликовать',kind:'submit'},
    ];

const formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {caption:'Зарегистрироваться',kind:'submit'},
    ];

function objForm(obj, isSucsed=false, isError=true, labCapB=true) {

    let newObj
    if (isSucsed && !isError) {
        if (labCapB) {
            if (obj.kind === "dropdown") {
                newObj = document.createElement("select");
                for (let opt of obj.variants) {
                    let option = document.createElement("option");
                    option.value = opt.value;
                    option.textContent = opt.text;
                    newObj.appendChild(option);
                }
                variants = []
            } else if (obj.kind === "radio") {
                let variantsLocal = obj.variants;
                newObj = document.createElement("div");
                newObj.style.width = "auto";
                for (let opt of variantsLocal) {
                    let inpt = document.createElement("input");
                    inpt.type = obj.kind;
                    inpt.value = opt.value;
                    inpt.name = obj.name;
                    let text = document.createTextNode(opt.text);
                    newObj.appendChild(inpt);
                    newObj.appendChild(text);
                }
            } else {
                newObj = document.createElement("input")
                newObj.type = obj.kind
            }
            if (obj.kind === "longtext") {
                newObj.type = "text"
                newObj.style.width = "460px"
            } else if (obj.kind === "shorttext") {
                newObj.type = "text"
                newObj.style.width = "210px"
            } else if (obj.kind === "memo") {
                newObj.type = "text"
                newObj.style.width = "600px"
                newObj.style.height = "60px"
            } else if (obj.kind === "check") {
                newObj.type = "checkbox"
            }
            newObj.style.overflowY = "scroll"
            newObj.style.overflowX = "hidden"
            newObj.style.resize = "none";
            newObj.name = obj.name
        } else {
            newObj = document.createElement("button")
            newObj.textContent = obj.caption
            newObj.type = obj.kind
        }
    } else {
        newObj = document.createElement("p")
        newObj.textContent = "Unexpected Error. Check Console for more information ( F12 -> Console -> repeat your actions ) ."
        newObj.classList.add("error-message")
    }

    return [isSucsed, isError, newObj]
}

export function createForm() {

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";

    for (let obj of formDef) {
        createTable(obj, table)
    }

    document.body.appendChild(table)
}

function createTable(obj, table) {

    const row = document.createElement("tr");

    if (obj["labCapB"]) {
        if (obj.kind === "memo") {
            const cell = document.createElement("td");
            cell.colSpan = 2;
            cell.style.whiteSpace = "pre-line";
            cell.style.padding = "10px"
            let labelText = document.createTextNode(obj.label + "\n");
            cell.appendChild(labelText);
            cell.appendChild(objForm(obj, obj['isSucsed'], obj['isError'], obj['labCapB'])[2]);
            row.appendChild(cell)
        } else {
            const cell = document.createElement("td");
            cell.style.padding = "10px"
            cell.textContent = obj.label
            row.appendChild(cell)
            const cell2 = document.createElement("td");
            cell2.style.padding = "10px"
            cell2.appendChild(objForm(obj, obj['isSucsed'], obj['isError'], obj['labCapB'])[2])
            row.appendChild(cell2)
        }

        table.appendChild(row)
    } else {

        const cell = document.createElement("td");
        cell.appendChild(objForm(obj, obj['isSucsed'], obj['isError'], obj['labCapB'])[2])
        cell.colSpan = 2
        cell.style.padding = "10px"
        row.appendChild(cell)

        table.appendChild(row)
    }
}

export function getter() {
    let labCap = document.getElementById("labCap").options[document.getElementById("labCap").selectedIndex].text
    let head = document.getElementById("head").value
    let kind = document.getElementById("kind").value
    let name = document.getElementById("name").value

    console.log(labCap + ', ' + head + ', ' + kind + ', ' + name)
    console.log(formDef)

    let isSucsed
    let isError

    if (labCap === 'label') {
        isSucsed = true
        isError = false
        if (variants.length > 0) {
            let resultV = []
            for (let i = 0; i < variants.length; i++) {
                resultV.push({text: variants[i], value: i+1 })
            }
            formDef.push({label: head, kind: kind, name: name, "isSucsed": isSucsed, "isError": isError, "labCapB": true, variants: resultV})
            variants = []
        } else {
            formDef.push({label: head, kind: kind, name: name, "isSucsed": isSucsed, "isError": isError, "labCapB": true})
        }
    } else if (labCap === 'caption') {
        isSucsed = true
        isError = false
        formDef.push({caption: head, kind: kind, "isSucsed": isSucsed, "isError": isError, "labCapB": false})
    } else {
        console.error(`Unknown label type : ${labCap}`)
        let newObj
        newObj = document.createElement("p")
        newObj.textContent = "Unexpected Error. Check Console for more information ( F12 -> Console -> repeat your actions ) ."
        newObj.classList.add("error-message")
        document.body.appendChild(newObj)
    }
}

export function AddVariants() {
    for (let obj of document.getElementById("variant").value.split(', ')) {
        variants.push(obj)
    }
    console.log(variants)
}

function upgrader() {
    for (let obj of formDef1) {
        obj["isSucsed"] = true;
        obj["isError"] = false;
        if (obj.kind === "submit" || obj.kind === "reset" || obj.kind === "button") {
            obj["labCapB"] = false
        } else {
            obj["labCapB"] = true
        }
    }

    for (let obj of formDef2) {
        obj["isSucsed"] = true;
        obj["isError"] = false;
        if (obj.kind === "submit" || obj.kind === "reset" || obj.kind === "button") {
            obj["labCapB"] = false
        } else {
            obj["labCapB"] = true
        }
    }

    console.log(formDef1)
    console.log(formDef2)
}

export function useFormDef1() {
    upgrader()
    formDef = formDef1
    createForm()
}

export function useFormDef2() {
    upgrader()
    formDef = formDef2
    createForm()
}