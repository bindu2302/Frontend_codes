function MultiplicationTable(n) {
    let table = []
    for(let i=1; i<=10; i++) {
        table.push(n*i);
    }
    return table
}
console.log(MultiplicationTable(3));