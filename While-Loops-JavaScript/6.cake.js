function cake(input){
    let width = input[0];
    let length = input[1];
    let numParts = width * length;

    let i = 2
    while(true){
        let currentCommand = input[i];        
        
        if (currentCommand == "STOP"){
            console.log(`${numParts} pieces are left.`)
            break;
        }

        let cakePartLeft = Number(input[i]);    
        numParts -= cakePartLeft

        if(numParts < 0){
            console.log(`No more cake left! You need ${Math.abs(numParts)} pieces more.`);
            break;
        }    
        
        i++
    }    
}
//cake(["10","10","20","20","20","20","21"])
//cake(["10","2","2","4","6","STOP"])