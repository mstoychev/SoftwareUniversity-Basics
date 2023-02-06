function oscar(input){
    let actorName = input[0];             //Име на актьора 
    let actorPoints = Number(input[1]);       //Точки от академията 
    let evaluatorsCount = Number(input[2]);                 //Брой оценяващи n

    for (let i = 0; i < evaluatorsCount * 2; i++){
        let judgeName = input[i + 3]
        let judgePoints = Number(input[i + 4])

        actorPoints += judgeName.length * judgePoints / 2
        //console.log(actorPoints)
        if (actorPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
            break;
        } 
    } 

    if (actorPoints <= 1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5 - actorPoints).toFixed(1)} more!`)
    }  

}
oscar(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

