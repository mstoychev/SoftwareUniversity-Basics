function operationsBtwNumbers(input){
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let simbol = input[2];
    let result = 0;
    let impressExitConsole = "";

    if (simbol == "+"){
        result = N1 + N2;
        let evenOrOdd = "";        
        if (result % 2 == 0){
            evenOrOdd = "even";
            impressExitConsole = `${N1} ${simbol} ${N2} = ${result} - ${evenOrOdd}`
        } else{
            evenOrOdd = "odd";
            impressExitConsole = `${N1} ${simbol} ${N2} = ${result} - ${evenOrOdd}`
        }
    } else if(simbol == "-"){
        result = N1 - N2;
        let evenOrOdd = "";        
        if (result % 2 == 0){
            evenOrOdd = "even";
            impressExitConsole = `${N1} ${simbol} ${N2} = ${result} - ${evenOrOdd}`
        } else{
            evenOrOdd = "odd";
            impressExitConsole = `${N1} ${simbol} ${N2} = ${result} - ${evenOrOdd}`
        }
    } else if(simbol == "*"){
        result = N1 * N2;
        let evenOrOdd = "";        
        if (result % 2 == 0){
            evenOrOdd = "even";
            impressExitConsole = `${N1} ${simbol} ${N2} = ${result} - ${evenOrOdd}`
        } else{
            evenOrOdd = "odd"
            impressExitConsole = `${N1} ${simbol} ${N2} = ${result} - ${evenOrOdd}`
        }
    } else if(simbol == "/"){        
        if (N2 != 0){
                result = N1 / N2;
                impressExitConsole = `${N1} / ${N2} = ${(result).toFixed(2)}`
        } else{
                impressExitConsole = `Cannot divide ${N1} by zero`
        }        
    } else if(simbol == "%"){
        if (N2 != 0){
            result = N1 % N2;
            impressExitConsole = `${N1} % ${N2} = ${result}`
        } else{
            impressExitConsole = `Cannot divide ${N1} by zero`
        }           
    }
    console.log(impressExitConsole)
}
//operationsBtwNumbers(["10", "12", "+"])
//operationsBtwNumbers(["123", "12", "/"])
//operationsBtwNumbers(["112", "0", "/"])
//operationsBtwNumbers(["10", "1", "-"])
//operationsBtwNumbers(["10", "3", "%"])
//operationsBtwNumbers(["10", "0", "%"])
//operationsBtwNumbers(["7", "3", "*"])