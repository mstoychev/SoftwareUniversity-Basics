function multiplicationTable(){
    for (i = 1; i <= 10; i++) {
        for (j = 1; j <= 10; j++){
            let result = i * j
            console.log(`${i} * ${j} = ${result}`)
        }
    }
}
multiplicationTable()