function skyTrip(input){
    let nights = Number(input[0]) - 1;
    let typeOfRoom = input[1];
    let opinion = input[2];
    let price = 0;
    let tripCost = 0;

    if (typeOfRoom === "room for one person"){
        price = 18;
        if (nights < 10){
            tripCost = nights * price;
        } else if (nights >= 10 && nights <=15){
            tripCost = nights * price;
        } else if (nights > 15){
            tripCost = nights * price;
        }

    } else if (typeOfRoom === "apartment"){
        price = 25;
        if (nights < 10){
            tripCost = nights * price * 0.7;
        } else if (nights >= 10 && nights <=15){
            tripCost = nights * price * 0.65;
        } else if (nights > 15){
            tripCost = nights * price * 0.5;
        }

    } else if (typeOfRoom === "president apartment"){
        price = 35;
        if (nights < 10){
            tripCost = nights * price * 0.9;
        } else if (nights >= 10 && nights <=15){
            tripCost = nights * price * 0.85;
        } else if (nights > 15){
            tripCost = nights * price * 0.8;
        }
    }

    if (opinion === "positive"){
        tripCost *= 1.25;
        console.log((tripCost).toFixed(2))
    } else if(opinion === "negative"){
        tripCost *= 0.9;
        console.log((tripCost).toFixed(2))
    }
}
//skyTrip(["14", "apartment", "positive"])
//skyTrip(["30", "president apartment", "negative"])
//skyTrip(["12", "room for one person", "positive"])
//skyTrip(["2", "apartment", "positive"])