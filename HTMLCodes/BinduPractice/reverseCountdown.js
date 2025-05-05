function reverseCountdown(n){
    let result = [];
    while(n>=1) {
        result.push(n);
        n--;
    }
    return result;
}
console.log(reverseCountdown(5));