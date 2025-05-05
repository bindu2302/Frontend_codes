function missingNum(arr,n){
    let total = (n*(n+1))/2;
    let sum = arr.reduce((acc,num) => acc+num,0);
    return total-sum;
}
console.log(missingNum([1,2,3,4,5,6,8],8));

