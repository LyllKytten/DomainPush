
function countVowelsForEach(line) {
    const vowels = Array.from("аоуыэяёюие");
    line = Array.from(line.toLowerCase());

    let count = 0;
    line.forEach((letter) => {if (vowels.includes(letter)) count++; });
    return count;
}

function countVowelsFilter(line) {
    const vowels = Array.from("аоуыэяёюие");
    line = Array.from(line.toLowerCase());

    return (line.filter((letter) => vowels.includes(letter))).length;
}

function countVowelsReduce(line) {
    const vowels = Array.from("аоуыэяёюие");
    line = Array.from(line.toLowerCase());

    return line.reduce((acc, letter) => {return vowels.includes(letter) ? acc + 1 : acc}, 0);
}


let line = prompt("Введите пожалуйста строку, в которой нужно считать гласные")
// let line = "фыввааппрооллджцуушкимлы";
while (!line) {
    line = prompt(`Вы ввели ${line ? line : "пустую строку"}, что не подходит.\nВведите пожалуйста строку, в которой нужно считать гласные`)
}

let result = countVowelsForEach(line);
console.log(result);

let resultFilter = countVowelsFilter(line);
console.log(resultFilter);

let resultReduce = countVowelsReduce(line);
console.log(resultReduce);

alert(`Ответ для forEach: ${result}
Ответ для filter: ${resultFilter}
Ответ для reduce: ${resultReduce}`);