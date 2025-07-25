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

const transformDict = {
    longtext: {type: "text", width: "100%"},
    number: {type: "text", width: "75px"},
    shorttext: {type: "text", width: "50%"},
    dropdown: "select",
    radio: "radio",
    check: "checkbox",
    memo: "textarea",
    submit: "submit",
}

function showForm(formId, formNumber) {
    let formEl = document.getElementById(formId);
    let formToBuild = formNumber === 1 ? formDef1 : formDef2;

    let newTable = document.createElement("table");
    newTable.style.cssText = "border-collapse: collapse; text-align: left; width: 50%;";

    let tableBody = document.createElement("tbody");

    for (let el of formToBuild) {
        let newRow = document.createElement("tr");
        let firstCol = document.createElement("td");
        firstCol.style.width = "25%";
        let secondCol, secondEl;
        if (el.kind !== ("memo" && "submit")) {
            firstCol.innerText = el.label;
            secondCol = document.createElement("td");
            // let secondEl;
        }

        switch (el.kind) {
            case "dropdown":
                secondEl = document.createElement(transformDict[el.kind]);
                secondEl.setAttribute("name", el.name);
                for (let variant of el.variants) {
                    let newVariant = document.createElement("option");
                    newVariant.setAttribute("value", variant.value);
                    newVariant.innerText = variant.text;
                    secondEl.appendChild(newVariant);
                }
                secondCol.appendChild(secondEl);

                newRow.appendChild(firstCol);
                newRow.appendChild(secondCol);

                break;
            case "radio":
                secondEl = document.createElement("div");
                // secondEl.setAttribute("name", el.name);

                for (let option of el.variants) {
                    let newOption = document.createElement("input")
                    newOption.setAttribute("type", transformDict[el.kind]);
                    newOption.setAttribute("value", option.value);
                    newOption.setAttribute("name", el.name);
                    let newOptionText = document.createElement("span");
                    newOptionText.innerText = option.text;
                    secondEl.appendChild(newOption);
                    secondEl.appendChild(newOptionText);
                }
                secondCol.appendChild(secondEl);
                newRow.appendChild(firstCol);
                newRow.appendChild(secondCol);

                break;
            // case "check":

            case "memo":
                firstCol.setAttribute("colspan", "2");
                firstCol.innerHTML = `${el.label}<br>`;
                let newArea = document.createElement(transformDict[el.kind]);
                newArea.setAttribute("name", el.name);
                newArea.style.width = "100%";
                firstCol.appendChild(newArea);

                newRow.appendChild(firstCol);

                break;
            case "submit":
                
                let newBtn = document.createElement("input");
                newBtn.setAttribute("type", transformDict[el.kind]);
                newBtn.setAttribute("value", el.caption);
                firstCol.colSpan = 2;
                firstCol.appendChild(newBtn);
                newRow.appendChild(firstCol);

                break;
            default:
                if (el.kind.includes("text") || el.kind.includes("number")) {
                    secondEl = document.createElement("input");
                    secondEl.setAttribute("type", transformDict[el.kind].type);
                    secondEl.style.width = transformDict[el.kind].width;
                }
                else {
                    secondEl = document.createElement("input")
                    secondEl.setAttribute("type", transformDict[el.kind]);
                }

                secondEl.setAttribute("name", el.name);
                secondCol.appendChild(secondEl);

                newRow.appendChild(firstCol);
                newRow.appendChild(secondCol);

                break;
        }

        tableBody.appendChild(newRow);

        // if (transformDict[el.kind] !== ("textarea" || "submit")) {
        //     let newRow = document.createElement("tr");
        //
        //     let firstCol = document.createElement("td");
        //     firstCol.innerText = el.label;
        //
        //     let secondCol = document.createElement("td");
        //     let secondEl;
        //     if (el.kind.includes("text" || "number")) {
        //         secondEl = document.createElement("input");
        //         secondEl.setAttribute("type", transformDict[el.kind.type]);
        //         secondEl.style.cssText = `width: ${transformDict[el.kind.width]}`;
        //     }
        //     else {
        //         secondEl = document.createElement("input")
        //         secondEl.setAttribute("type", transformDict[el.kind]);
        //     }
        //
        //     secondEl.setAttribute("name", el.name);
        //     secondCol.appendChild(secondEl);
        //
        //     newRow.appendChild(firstCol);
        //     newRow.appendChild(secondCol);
        // }
        // else if (transformDict[el.kind] === "textarea") {
        //     let newRow = document.createElement("tr");
        //
        //     let newCol = document.createElement("td");
        //     firstCol.setAttribute("colspan", "2");
        //     firstCol.innerHTML = `${el.label}<br>`;
        //     let newArea = document.createElement(transformDict[el.kind]);
        //     newArea.setAttribute("name", el.name);
        //     firstCol.appendChild(newArea);
        //
        //     newRow.appendChild(firstCol);
        // }
        //
        // else {
        //     let newRow = document.createElement("tr");
        //     let newCol = document.createElement("td");
        //     let newBtn = document.createElement("input");
        //     newBtn.setAttribute("type", transformDict[el.kind]);
        //     newBtn.setAttribute("value", el.caption);
        //
        //     firstCol.appendChild(newBtn);
        //     newRow.appendChild(firstCol);
        //
        // }

    }

    newTable.appendChild(tableBody);
    formEl.appendChild(newTable);
    formEl.appendChild(document.createElement("hr"));
}


