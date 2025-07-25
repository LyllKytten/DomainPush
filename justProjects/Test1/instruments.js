import { getter, createForm, AddVariants, useFormDef1, useFormDef2 } from "./tests.js"

function basicTable() {
    let options = ['label', 'caption'];

    try {
        document.body.removeChild(document.getElementById("test"))
    } catch (e) {
        // console.error(e)
        }


    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.textAlign = "center";  // исправлено
    table.id = "test";

    // Первая строка
    let row1 = document.createElement("tr");
    let col1_1 = document.createElement("td");
    col1_1.colSpan = 2;
    let select = document.createElement("select");
    select.id = "labCap";

    options.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        select.appendChild(option);
    });

    col1_1.appendChild(select);
    row1.appendChild(col1_1);
    table.appendChild(row1);

    // Вторая строка
    let row2 = document.createElement("tr");
    let col2_1 = document.createElement("td");
    col2_1.colSpan = 2;
    let textarea1 = document.createElement("textarea");
    textarea1.name = "tabCap";
    textarea1.id = "head";
    textarea1.placeholder = "enter text that would be contained in obj";
    col2_1.appendChild(textarea1);
    row2.appendChild(col2_1);
    table.appendChild(row2);

    // Третья строка
    let row3 = document.createElement("tr");
    let col3_1 = document.createElement("td");
    col3_1.colSpan = 2;
    // rowSpan нужно применять к ячейке, если требуется
    col3_1.rowSpan = 1;  // если нужно, иначе убрать
    let textarea2 = document.createElement("textarea");
    textarea2.name = "kind";
    textarea2.id = "kind";
    textarea2.placeholder = "enter type";
    textarea2.onchange = ddrCheck
    col3_1.appendChild(textarea2);
    row3.appendChild(col3_1);
    table.appendChild(row3);

    // Четвёртая строка
    let row4 = document.createElement("tr");
    let col4_1 = document.createElement("td");
    col4_1.colSpan = 2;
    let textarea3 = document.createElement("textarea");
    textarea3.name = "description";
    textarea3.id = "name";
    textarea3.placeholder = "enter description";
    col4_1.appendChild(textarea3);
    row4.appendChild(col4_1);
    table.appendChild(row4);

    // Пятая строка с кнопкой getter
    let row5 = document.createElement("tr");
    let col5_1 = document.createElement("td");
    col5_1.colSpan = 2;
    let button1 = document.createElement("button");
    button1.type = "submit";
    button1.textContent = "Get";
    button1.onclick = getter;  // без вызова
    col5_1.appendChild(button1);
    row5.appendChild(col5_1);
    table.appendChild(row5);

    // Шестая строка с кнопкой createForm
    let row6 = document.createElement("tr");
    let col6_1 = document.createElement("td");
    col6_1.colSpan = 2;
    let button2 = document.createElement("button");
    button2.type = "submit";
    button2.textContent = "Create";
    button2.onclick = createForm;  // без вызова
    col6_1.appendChild(button2);
    row6.appendChild(col6_1);
    table.appendChild(row6);

    document.body.appendChild(table);
}

function modificatedTable() {
    document.body.removeChild(document.getElementById("test"));

    let options = ['label', 'caption'];

    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.textAlign = "center";  // исправлено
    table.id = "test";

    // Первая строка
    let row1 = document.createElement("tr");
    let col1_1 = document.createElement("td");
    col1_1.colSpan = 2;
    let select = document.createElement("select");
    select.id = "labCap";

    options.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        select.appendChild(option);
    });

    col1_1.appendChild(select);
    row1.appendChild(col1_1);
    table.appendChild(row1);

    // Вторая строка
    let row2 = document.createElement("tr");
    let col2_1 = document.createElement("td");
    col2_1.colSpan = 2;
    let textarea1 = document.createElement("textarea");
    textarea1.name = "tabCap";
    textarea1.id = "head";
    textarea1.placeholder = "enter text that would be contained in obj";
    col2_1.appendChild(textarea1);
    row2.appendChild(col2_1);
    table.appendChild(row2);

    // Третья строка
    let row3 = document.createElement("tr");
    let col3_1 = document.createElement("td");
    let col3_2 = document.createElement("td");
    col3_1.colSpan = 2;
    // rowSpan нужно применять к ячейке, если требуется
    col3_1.rowSpan = 2;  // если нужно, иначе убрать
    let textarea2 = document.createElement("textarea");
    textarea2.name = "kind";
    textarea2.id = "kind";
    textarea2.placeholder = "enter type";
    textarea2.onchange = ddrCheck
    let textareaV = document.createElement("textarea");
    textareaV.id = "variant";
    textareaV.placeholder = "enter variant like : one, two, three three, four";
    textareaV.name = "variant";
    textareaV.style.width = "200px";
    col3_2.appendChild(textareaV);
    col3_1.appendChild(textarea2);
    row3.appendChild(col3_1);
    row3.appendChild(col3_2);
    table.appendChild(row3);

    // кнопка для добавления вариантов
    let rowBut = document.createElement("tr");
    let colB_1 = document.createElement("td");
    let buttonB_1 = document.createElement("button");
    buttonB_1.type = "submit";
    buttonB_1.textContent = "Add";
    buttonB_1.onclick = AddVariants;
    colB_1.appendChild(buttonB_1);
    rowBut.appendChild(colB_1);
    table.appendChild(rowBut);

    // Четвёртая строка
    let row4 = document.createElement("tr");
    let col4_1 = document.createElement("td");
    col4_1.colSpan = 2;
    let textarea3 = document.createElement("textarea");
    textarea3.name = "description";
    textarea3.id = "name";
    textarea3.placeholder = "enter description";
    col4_1.appendChild(textarea3);
    row4.appendChild(col4_1);
    table.appendChild(row4);

    // Пятая строка с кнопкой getter
    let row5 = document.createElement("tr");
    let col5_1 = document.createElement("td");
    col5_1.colSpan = 2;
    let button1 = document.createElement("button");
    button1.type = "submit";
    button1.textContent = "Get";
    button1.onclick = getter;
    col5_1.appendChild(button1);
    row5.appendChild(col5_1);
    table.appendChild(row5);

    // Шестая строка с кнопкой createForm
    let row6 = document.createElement("tr");
    let col6_1 = document.createElement("td");
    col6_1.colSpan = 2;
    let button2 = document.createElement("button");
    button2.type = "submit";
    button2.textContent = "Create";
    button2.onclick = createForm;
    col6_1.appendChild(button2);
    row6.appendChild(col6_1);
    table.appendChild(row6);

    document.body.appendChild(table);
}

let wasOrNot = false

function ddrCheck() {
    let textInside = document.getElementById("kind");
    if (textInside.value === "dropdown" || textInside.value === "radio") {
        if (!wasOrNot) {
            modificatedTable()
            wasOrNot = true;
            console.log(wasOrNot);
        }
    } else if (wasOrNot) {
        wasOrNot = false;
        basicTable()
    }
}

function change() {
    document.getElementById("startB").classList.add("hidden");
    document.getElementById("UFD1").classList.add("hidden");
    document.getElementById("UFD2").classList.add("hidden");
    basicTable();
}

window.change = change;
window.useFormDef1 = useFormDef1;
window.useFormDef2 = useFormDef2;