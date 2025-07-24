
function countVowels(line) {
    const vowels = "аоуыэяёюие"; // check whether those are all
    let count = 0;
    for (let letter of line.toLowerCase()) {
        if (vowels.includes(letter))
            count++;
    }
    return count;
}



let line = prompt("Введите пожалуйста строку, в которой нудно считать гласные")
// let line = "фыввааппрооллджцуушкимлы";
while (!line) {
    line = prompt(`Вы ввели ${line ? line : "пустую строку"}, что не подходит.\nВведите пожалуйста строку, в которой нудно считать гласные`)
}

let result = countVowels(line);
console.log(result);
alert(`Ответ: ${result}`)