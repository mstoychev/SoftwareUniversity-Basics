function hotelRoom(input){
    let mounth = input[0];
    let nights = Number(input[1]);
    let studio = 0;
    let apartment = 0;
    let totalMoneyStud = 0;
    let totalMoneyApart = 0;

    if (mounth === "May" || "October"){
        studio = 50;
        apartment = 65;
        if (nights > 7 && nights <= 13){
            totalMoneyStud = studio * nights * 0.95;
            totalMoneyApart = studio * nights;
        } else if(nights > 14){
            totalMoneyStud = studio * nights * 0.7;
            totalMoneyApart = studio * nights * 0.9;
        } else{
            totalMoneyStud = studio * nights;
            totalMoneyApart = studio * nights;
        }
    } else if(mounth === "June" || "September "){
        studio = 75.2;
        apartment = 68.7;
        if (nights > 14){
            totalMoneyStud = studio * nights * 0.8;
            totalMoneyApart = studio * nights * 0.9;
        } else{
            totalMoneyStud = studio * nights;
            totalMoneyApart = studio * nights;
        }

    } else if (mounth === "July" || "August"){
        studio = 76;
        apartment = 77;
        if (nights > 14){
            totalMoneyStud = studio * nights;
            totalMoneyApart = studio * nights * 0.9;
        }
    }
    console.log(`Apartment: ${(totalMoneyApart).toFixed(2)} lv`)
    console.log(`Studio: ${(totalMoneyStud).toFixed(2)} lv.`)
}
//hotelRoom(["May", "15"]) 
//hotelRoom(["June", "14"])

