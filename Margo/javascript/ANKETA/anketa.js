function isValidFio(str) {
    return typeof str === "string" && str
}

let name = prompt('Введите Ваше имя', 'Серафима');
while(!isValidFio(name)) {
    name = prompt(`Имя не может быть пустым и должно быть текстом. Вы ввели ${name}.\nВведите Ваше имя`, 'Серафима');
}

let surname = prompt("Введите Вашу фамилию", "Долмацкая");
while (!isValidFio(surname)) {
    surname = prompt(`Фамилия не может быть пустой и должна быть текстом. Вы ввели ${surname}.\nВведите Вашу фамилию`, "Долмацкая");
}

let lastName = prompt("Введите Ваше отчество", "Платоновна");
while (!isValidFio(lastName)) {
    lastName = prompt(`Отчество не может быть пустым и должно быть текстом. Вы ввели ${lastName}.\nВведите Ваше отчество`, "Платоновна");
}

let ageString = prompt("Введите Ваш возраст. Возраст должен быть целым числом больше 0", "17");
let age = Number(ageString);
while (isNaN(age) || !Number.isInteger(age) || age < 1) {
    ageString = prompt(`Возраст должен быть целым числом больше 0. Вы ввели ${age}\nВведите Ваш возраст`, "17");
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

text = `ваше ФИО: ${surname} ${name} ${lastName}\nваш возраст в годах: ${age}\nваш возраст в днях: ${ageInDays}\nчерез 5 лет вам будет: ${ageInFiveYears}\nваш пол: ${sex}\nвы на пенсии: ${pension}`
alert(text);

