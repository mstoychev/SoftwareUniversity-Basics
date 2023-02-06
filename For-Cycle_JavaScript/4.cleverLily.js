function cleverLili(input){
    let LilisAge = Number(input[0]);
    let laundryCost = Number(input[1]);
    let toysCost = Number(input[2]);

    let bDmoney = 0;
    let count = 0;
    let toy = 0;

    for (let i = 1; i <= LilisAge; i++){
        if (i % 2 == 0){
            count ++
            bDmoney += count*10;       
        } else{
            toy ++
        }
    }

    let toySavedMoney = toy * toysCost;
    let brotherSteal = Math.floor(LilisAge /2);
    let bDSavedMoney = bDmoney - brotherSteal;
    let finalIncome = toySavedMoney + bDSavedMoney;
    
    if (finalIncome >= laundryCost){
        console.log(`Yes! ${(finalIncome - laundryCost).toFixed(2)}`)
    } else{
        console.log(`No! ${(laundryCost - finalIncome).toFixed(2)}`)
    } 
}
//cleverLili(["10", "170.00", "6"])
//cleverLili(["21", "1570.98", "3"])

