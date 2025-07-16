
function countSum(array) {
    let sum = 0;
    for (let el of array) {

        if (!el)
            return sum;
        if (Array.isArray(el))
            sum += countSum(el);
        else
            sum += el;
    }
    return sum;
}

let test_array = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1, 8 ]

alert(`Counted sum is ${countSum(test_array)}`)
console.log(countSum(test_array));
