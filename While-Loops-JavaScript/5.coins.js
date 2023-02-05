function coinsCalculate(input){
    let coinsLev = Number(input[0]);
    let coinsCount = 0;

    let currentAmountCent = Math.round(coinsLev * 100);     // uso este método porque con algunos datos 0.56 * 100 se vuelve loco
    
    //Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка 
    
    while(currentAmountCent > 0){
        if (currentAmountCent >= 200){
            currentAmountCent -= 200
        } else if(currentAmountCent >= 100){
            currentAmountCent -= 100
        } else if(currentAmountCent >= 50){
            currentAmountCent -= 50
        } else if(currentAmountCent >= 20){
            currentAmountCent -= 20
        } else if(currentAmountCent >= 10){
            currentAmountCent -= 10
        } else if(currentAmountCent >= 5){
            currentAmountCent -= 5
        } else if (currentAmountCent >= 2){
            currentAmountCent -= 2
        } else {
            currentAmountCent -= 1
        } 
        coinsCount++
    }
    console.log(coinsCount)
}
//coinsCalculate(["1.23"])
//coinsCalculate(["2"])
//coinsCalculate(["0.56"])
//coinsCalculate(["2.73"])