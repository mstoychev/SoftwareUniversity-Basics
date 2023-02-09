function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    typeOfTrip= "";

    if (season === "summer"){
        typeOfTrip = "Camp";
        if (budget <= 100){
            destination = "Bulgaria";
            budget *= 0.3 
        } else if(budget <= 1000){
            destination = "Balkans";
            budget *= 0.4
        } else if(budget > 1000){
            destination = "Europe";
            typeOfTrip = "Hotel";
            budget *= 0.9
        }
    } else if(season === "winter"){
        typeOfTrip = "Hotel";
        if (budget <= 100){
            destination = "Bulgaria";
            budget *= 0.7 
        } else if(budget <= 1000){
            destination = "Balkans";
            budget *= 0.8
        } else if(budget > 1000){
            destination = "Europe";        
            budget *= 0.9
        }
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${typeOfTrip} - ${(budget).toFixed(2)}`)
}
//journey(["50", "summer"])
//journey(["75", "winter"])
//journey(["312", "summer"])
//journey(["678.53", "winter"])
//journey(["1500", "summer"])