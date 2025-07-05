var FIO1, FIO2, FIO3;

function isValid(str) {
    return typeof str === "string" && str !== "" && isNaN(str);
}

do {
    FIO1 = prompt("Please enter a valid last name");
}
while (!isValid(FIO1)) {
}

do {
    FIO2 = prompt("Please enter a valid first name");
}
while (!isValid(FIO2)) {
}

do {
    FIO3 = prompt("Please enter a valid surname");
}
while (!isValid(FIO3)) {
}

var age = 0;

while (!Number.isInteger(age) || age===0) {
    let input = prompt("Please enter a valid age:");
    age = Number(input);

    if (Number.isInteger(age) && age > 0) break;
}

var ageInDays = (age%4)*366 + (age-(age%4))*365;

var Gender = confirm("Are you a man ?")

var centryna = false;

if (age >= 60 && Gender) {
    centryna = true;
} else if (age >= 55 && !Gender) {
    centryna = true;
} else {
    centryna = false;
}

text = `Ваше ФИО: ${FIO2} ${FIO1} ${FIO3}\nваш возраст в годах: ${age}\nваш возраст в днях: ${ageInDays}\nчерез 5 лет вам будет: ${age + 5}\nваш пол: ${Gender ? "муской" : "женский"}\nвы на пенсии: ${centryna ? "да" : "нет"}`

alert(text);