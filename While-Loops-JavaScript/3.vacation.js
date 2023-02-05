function vacation(input){
    let moneyNeeded = Number(input[0]);
    let currentMoney = Number(input[1]);
    let spendCount = 0;
    let spendDay = 0;
    

    let i = 2;
    while(true){
        let action = input[i];
        i++
        let amount = Number(input[i]);
        i++
                
        spendDay += 1;        
        
    
        if (currentMoney < 0){
            currentMoney = 0            
        }

        if (action == "spend"){
            currentMoney -= amount;
            
            spendCount++
            if(spendCount == 5){
                console.log("You can't save the money.")
                console.log(`${spendDay}`);
                break;
            }
        } else if(action == "save"){
            currentMoney += amount
            spendCount = 0;
        }

        if (currentMoney >= moneyNeeded){
            console.log(`You saved the money for ${spendDay} days.`)
            break;
        }
    }
}
//vacation(["2000","1000","spend","1200","save","2000"])
//vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"])
//vacation(["250","150","spend","50","spend","50","save","100","save","100"])