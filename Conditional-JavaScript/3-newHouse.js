function newHouse(input){
    let flowers = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let finalPrice = 0; 
    
    if (flowers === "Roses"){
        if(numFlowers > 80){
            finalPrice = numFlowers * 5 * 0.9
        } else{
            finalPrice = numFlowers * 5
        }
    } else if(flowers === "Dahlias"){
        if(numFlowers > 90){
            finalPrice = numFlowers * 3.8 * 0.85
        } else{
            finalPrice = numFlowers * 3.8
        }
    } else if(flowers === "Tulips"){
        if(numFlowers > 80){
            finalPrice = numFlowers * 2.8 * 0.85
        } else{
            finalPrice = numFlowers * 2.8
        }
    } else if(flowers === "Narcissus"){
        if(numFlowers < 120){
            finalPrice = numFlowers * 3 * 1.15
        } else{
            finalPrice = numFlowers * 3
        }
    } else if(flowers === "Gladiolus"){
        if(numFlowers < 80){
            finalPrice = numFlowers * 2.5 * 1.2
        } else{
            finalPrice = numFlowers * 2.5
        }
    }

    if (budget >= finalPrice){
        console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${(budget - finalPrice).toFixed(2)} leva left.`)
    } else{
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`)
    }
}
//newHouse(["Roses", "55", "250"])
//newHouse(["Tulips", "88", "260"])