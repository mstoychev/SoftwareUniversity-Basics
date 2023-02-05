function examPreparation(input){
    let numUnsatisfactoryNotes = Number(input[0]); //брой незадоволителни оценки
    let unsatisfactoryNote = 4;
    let exitMessage = "Enough";
    let insatisfactoryCount = 0;
    let totalProblems = 0;
    let totalSumNotes = 0;
    let lastProblemName = "";
    

    let i = 1;
    while(true){
        let problemName = input[i];
        i++
        let problemNote = Number(input[i]);
        i++     

        if (problemName == exitMessage){
            console.log(`Average score: ${ (totalSumNotes/ totalProblems).toFixed(2)}`);
            console.log(`Number of problems: ${totalProblems}`)
            console.log(`Last problem: ${lastProblemName}`);
            break;
        }
        totalProblems++                      // TIENES QUE PONERLO DESPUÉS DEL IF PORQUE SI NO DESTROZA TODO EL RESULTADO - OJO****
        totalSumNotes += problemNote;
        lastProblemName = problemName;


        if(problemNote <= unsatisfactoryNote ){  // nota menor o igual a 4 se considera insatisfactoria
            insatisfactoryCount++
            if (insatisfactoryCount == numUnsatisfactoryNotes){
                console.log(`You need a break, ${numUnsatisfactoryNotes} poor grades.`)
                break;
            }         
        }         
    }
}
//examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])
//examPreparation(["2","Income","3","Game Info","6","Best Player","4"])

