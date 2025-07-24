class ObjStorageClass {
    constructor() {
        this.data = {};
    }

    addValue(key, value) { this.data[key.toLowerCase()] = value; }

    getValue(key) {
        if (this.data.hasOwnProperty(key.toLowerCase()))
            return this.data[key.toLowerCase()];
        else
            return undefined;
    }

    deleteValue(key) {
        if (this.data.hasOwnProperty(key.toLowerCase())) {
            delete this.data[key.toLowerCase()];
            return true;
        }
        else
            return false;
    }

    getKeys() { return Object.keys(this.data); }
}

let drinkStorage = new ObjStorageClass();

function addNewDrink() {
    let name = prompt("Введите пожалуйста название напитка");
    while (!name) {
        name = prompt(`Название должно быть непустой строкой. Вы ввели ${name? name : "пустую строку"}. \nВведите пожалуйста название напитка`);
    }
    let isAlcoholic = confirm("Этот напиток алкогольный? \nЕсли да - нажмите Ок, если нет - нажмите Отмена.");
    let recipe = prompt("Введите пожалуйста рецепт напитка.");
    while (!recipe) {
        recipe = prompt(`Рецепт должно быть непустой строкой. Вы ввели ${recipe? recipe : "пустую строку"}. \nВведите пожалуйста рецепт напитка.`);
    }

    // let wholeInfo = `напиток ${name} \nалкогольный: ${isAlcoholic ? "да" : "нет"} \nрецепт приготовления: \n${recipe}`;
    // let wholeInfo = `алкогольный: ${isAlcoholic ? "да" : "нет"} \nрецепт приготовления: \n${recipe}`;
    drinkStorage.addValue(name, {alco: isAlcoholic, recipe: recipe});
}

function getDrinkInfo() {
    let name = prompt("Введите пожалуйста название напитка");
    while (!name) {
        name = prompt(`Название должно быть непустой строкой. Вы ввели ${name? name : "пустую строку"}. \nВведите пожалуйста название напитка`);
    }

    let drink = drinkStorage.getValue(name);
    if (!drink)
        alert("В нашем хранилище нет такого напитка...");
    else {
        let {isAlcoholic, recipe} = drink;
        let info = `напиток: ${name} \nалкогольный: ${isAlcoholic ? "да" : "нет"} \nрецепт приготовления: \n${recipe}`;
        alert(info);
    }
}

function deleteDrink() {
    let name = prompt("Введите пожалуйста название напитка");
    while (!name) {
        name = prompt(`Название должно быть непустой строкой. Вы ввели ${name? name : "пустую строку"}. \nВведите пожалуйста название напитка`);
    }

    if (drinkStorage.deleteValue(name))
        alert(`Напиток ${name} успешно удален`);
    else
        alert(`В нашем хранилище не было напитка ${name}, поэтому мы не смогли его удалить...`);
}

function showAllDrinks() {
    let allDrinks = drinkStorage.getKeys();
    let text = `все напитки в хранилище:\n`;
    for (let drink of allDrinks) {
        text += `${drink}\n`;
    }

    alert(text);
}