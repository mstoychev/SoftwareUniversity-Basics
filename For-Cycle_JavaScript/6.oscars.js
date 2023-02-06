function oscarsFunction(input){
    let actorsName = String(input[0]);
    let actorsPoint = Number(input[1]);
    let evaluatorsCount = Number(input[2]);

    for (let i = 0; i < evaluatorsCount * 2; i+=2) {
        let evaluatorsName = input[i + 3];
        let evaluatorsPoint = Number(input[i+ 4]);
        actorsPoint += evaluatorsName.length * evaluatorsPoint /2;
        //console.log(actorsPoint)
        if (actorsPoint > 1250.50){
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${actorsPoint.toFixed(1)}!`);
            break;
        }

    }
    if (actorsPoint <= 1250.5) {           // OJO, SACAR AQUÍ EL IF PARA QUE NO IMPRIMA VARIAS VECES EL CICLO
        console.log(`Sorry, ${actorsName} you need ${(1250.5 - actorsPoint).toFixed(1)} more!`)
    }
}
/* oscarsFunction(["Sandra Bullock",
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
"33"]) */
