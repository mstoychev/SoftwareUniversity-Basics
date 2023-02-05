function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let totalArea = width * length * hight

    let i = 3;
    while(true){
        let command = input[i];
        
        if (command == "Done"){
            console.log(`${totalArea} Cubic meters left.`)
            break;
        }

        let spaceLeft = Number(input[i]);
        totalArea -= spaceLeft

        if (totalArea < 0){
            console.log(`No more free space! You need ${Math.abs(totalArea)} Cubic meters more.`)
            break;
        }

        i++
    }
}
//moving(["10", "10","2","20","20","20","20","122"])
moving(["10", "1","2","4", "6","Done"])

