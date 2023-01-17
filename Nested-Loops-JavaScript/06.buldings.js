function building(input){
    let floors = Number(input[0]);
    let aparmentNumber = Number(input[1]);

    for (let i = floors; i >= 1; i--) {
        let printFloor = ""
        for (let j = 0; j < aparmentNumber; j++) {
            if (i == floors){            //soy retard.. en vez de poner == puse = y se reseteaba i --> infinite loop
                printFloor += `L${i}${j} `
            } else if (i % 2 == 0){
                printFloor += `O${i}${j} `
            } else {
                printFloor += `A${i}${j} `
            }
        }
        console.log(printFloor);
    }
}
building(["4", "4"])