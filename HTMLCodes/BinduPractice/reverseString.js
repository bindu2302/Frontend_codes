// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

function reverseString(str) {
    let reversed = "";
    for(let i=str.length-1; i>=0; i--) {
        reversed += str[i];
    }
    return reversed
}
console.log(reverseString("bindu"));