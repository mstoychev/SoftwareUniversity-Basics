function multiplicationTable(input){
// Напишете функция, която получава аргумент число от 1 до 10 и принтира таблицата за умножение в конзолата.
    let number = Number(input[0]);

    for (let i = 1; i <=10; i++){
        console.log(`${i} * ${number} = ${i * number}`)
    }
}
//multiplicationTable(["5"])