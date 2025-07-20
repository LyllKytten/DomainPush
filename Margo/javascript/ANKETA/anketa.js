function isValidFio(str) {
    return typeof str === "string" && str
}

let user_Name = prompt('Введите Ваше имя', 'Серафима');
while(!isValidFio(user_Name)) {
    user_Name = prompt(`Имя не может быть пустым и должно быть текстом. Вы ввели ${user_Name ? user_Name : "пустую строку"}.\nВведите Ваше имя`, 'Серафима');
}

let userSurname = prompt("Введите Вашу фамилию", "Долмацкая");
while (!isValidFio(userSurname)) {
    userSurname = prompt(`Фамилия не может быть пустой и должна быть текстом. Вы ввели ${userSurname ? userSurname : "пустую строку"}.\nВведите Вашу фамилию`, "Долмацкая");
}

let userLastName = prompt("Введите Ваше отчество", "Платоновна");
while (!isValidFio(userLastName)) {
    userLastName = prompt(`Отчество не может быть пустым и должно быть текстом. Вы ввели ${userLastName ? userLastName : "пустую строку"}.\nВведите Ваше отчество`, "Платоновна");
}

let ageString = prompt("Введите Ваш возраст. Возраст должен быть целым числом больше 0", "17");
let age = Number(ageString);
while (isNaN(age) || !Number.isInteger(age) || age < 1) {
    ageString = prompt(`Возраст должен быть целым числом больше 0. Вы ввели ${ageString ? ageString : "пустую строку"}\nВведите Ваш возраст`, "17");
    age = Number(ageString);
}


let ageInDays = age * 365;
let ageInFiveYears = age + 5;

let isOld = false;

let isMan = confirm("Ваш пол - мужской?\nЕсли да - выберите Ok, если нет - выберите Cancel");

if (isMan && age >= 63)
    isOld = true;
if (!isMan && age >= 58)
    isOld = true;

let sex = isMan ? "мужской" : "женский";
let pension = isOld ? "да" : "нет";

text = `ваше ФИО: ${userSurname} ${user_Name} ${userLastName}
ваш возраст в годах: ${age}
ваш возраст в днях: ${ageInDays}
через 5 лет вам будет: ${ageInFiveYears}
ваш пол: ${sex}
вы на пенсии: ${pension}`
alert(text);

