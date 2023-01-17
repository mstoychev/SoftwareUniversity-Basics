function sumOfTwoNumber(input){
    let startNumber = Number(input[0]);
    let finishNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let itsFound = false;
    let count = 0;

    for (let i = startNumber; i <= finishNumber; i++) {
        for (let j = startNumber; j <= finishNumber; j++) {
            count++
            if (i + j == magicNumber){                
                itsFound = true
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumber})`);
                ; break;
            }
        }

        if (itsFound == true){
            break;
        }
    }
    if (itsFound == false){
        console.log(`${count} combinations - neither equals ${magicNumber}`)
    }
}
//sumOfTwoNumber(["1", "10", "5"])
//sumOfTwoNumber(["23","24","20"])
