function steps(input){
    let goalStepsPerDay = 10000;
    let stepsPerDay = 0;


    let i = 0;   
    while(true){
        let currentCommand = input[i];               // lo dejo así sin meter Number porque puede ser "Going Home"
        

        if (currentCommand == "Going home"){
            i++
            let currentStepsGoingHome = Number(input[i]);
            stepsPerDay += currentStepsGoingHome
            if (stepsPerDay >= goalStepsPerDay){
                console.log("Goal reached! Good job!")
                console.log(`${stepsPerDay - goalStepsPerDay} steps over the goal!`);
            } else{
                console.log(`${goalStepsPerDay - stepsPerDay} more steps to reach goal.`);
            }            
            break;
        }
        
        let currentSteps = Number(input[i]);        // ahora después de quitarme la letra sí puedo meterle número
        stepsPerDay += currentSteps
        
        if (stepsPerDay >=  10000){
            console.log("Goal reached! Good job!")
            console.log(`${stepsPerDay - goalStepsPerDay} steps over the goal!`);
            break;
        } 

        i++
    }
}
//steps(["1000", "1500", "2000", "6500"])
//steps(["1500","3000","250","1548","2000","Going home","2000"])
//steps(["1500","300","2500","3000","Going home","200"])
//steps(["125","250","4000","30","2678","4682"])