// function findMax(arr) {
//     return Math.max(...arr)
// }
// console.log(findMax([10,20,30,40]));




function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([10, 20, 30, 40])); // Output: 40
