function travelling(input){
    let i = 0;
    let destination = input[i];
    i++
    let moneyNeeded = Number(input[i]);
    i++
    let currentSum = 0;

    while(destination != "End"){
        if (destination == "End"){
            break;
        }  
        currentSum += Number(input[i]);
        if (currentSum >= moneyNeeded){
            console.log(`Going to ${destination}!`);

            currentSum = 0;
            i++;
            destination = input[i];
            i++
            moneyNeeded = Number(input[i]);
        } 
        
        i++
    }
}
travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
