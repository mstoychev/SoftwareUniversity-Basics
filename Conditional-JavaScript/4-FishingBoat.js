function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let num = input[2];
    let finalPrice = 0;

    if (season === "Spring"){
        if (num <= 6){
            finalPrice = 3000 * 0.9
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        } else if (num >= 7 && num <= 11){
            finalPrice = 3000 * 0.85
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        } else if (num >= 12){
            finalPrice = 3000 * 0.75
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        }
    } else if (season === "Summer"){
        if (num <= 6){
            finalPrice = 4200 * 0.9
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        } else if (num >= 7 && num <= 11){
            finalPrice = 4200 * 0.85
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        } else if (num >= 12){
            finalPrice = 4200 * 0.75
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        }
    } else if (season === "Autumn"){
        if (num <= 6){
            finalPrice = 4200 * 0.9
        } else if (num >= 7 && num <= 11){
            finalPrice = 4200 * 0.85
        } else if (num >= 12){
            finalPrice = 4200 * 0.75
        }
    } else if (season === "Winter"){
        if (num <= 6){
            finalPrice = 2600 * 0.9
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        } else if (num >= 7 && num <= 11){
            finalPrice = 2600 * 0.85
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        } else if (num >= 12){
            finalPrice = 2600 * 0.75
            if (num % 2 ==0){
                finalPrice *= 0.95
            }
        }        
    }
    
    if (budget >= finalPrice){
        console.log(`Yes! You have ${(budget - finalPrice).toFixed(2)} leva left.`)
    } else{
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva.`)
    }
}
//fishingBoat(["3000", "Summer", "11"])
//fishingBoat(["3600", "Autumn", "6"])
//fishingBoat(["2000", "Winter", "13"])