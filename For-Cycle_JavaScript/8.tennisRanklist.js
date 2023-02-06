function tennisRanklist(input){
    let games = Number(input[0]);
    let inicialPoints = Number(input[1]);
    let winCounts = 0;
   
    for (let i = 0; i < games; i++){
        let classification = String(input[i + 2]);
        if (classification === "W"){
            winCounts +=1          
            inicialPoints += 2000
        } else if (classification === "F"){
            inicialPoints += 1200
        } else if (classification === "SF"){
            inicialPoints += 720
        }        
    }
    console.log(`Final points: ${inicialPoints}`)
    console.log(`Average points: ${Math.floor((inicialPoints - (Number(input[1])) )/games)}`)
    console.log(`${((winCounts /games) *100).toFixed(2)}%`)
}
/*tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])*/
