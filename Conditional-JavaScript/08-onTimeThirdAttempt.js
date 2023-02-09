function onTime(input){
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let totalMinArrive = (arriveHour *60) + arriveMin;
    let totalMinExam = (examHour * 60) + examMin;
    let differenceTotalTime = totalMinArrive - totalMinExam
    //console.log(differenceTotalTime)
    let differenceTotalTimeAbsolute = Math.abs(totalMinArrive - totalMinExam);
    let diffHours = Math.floor(differenceTotalTimeAbsolute / 60)
    let diffMins = (differenceTotalTimeAbsolute % 60) 

    
    if (differenceTotalTime > 0){
        console.log("Late");
        if (differenceTotalTimeAbsolute < 60){
            console.log(`${differenceTotalTimeAbsolute} minutes after the start`)
        } else{
            if (diffMins <= 9){
                console.log(`${diffHours}:0${diffMins} hours after the start`)
            } else{
                console.log(`${diffHours}:${diffMins} hours after the start`)
            }            
        }
    } else if(differenceTotalTime >= -30 && differenceTotalTime <= 0){
        console.log("On time");
        if (differenceTotalTime !== 0){
            console.log(`${diffMins} minutes before the start`)
        }

    } else {
        console.log("Early");
        if (differenceTotalTimeAbsolute < 60){
            console.log(`${differenceTotalTimeAbsolute} minutes before the start`)
        } else {
            if (diffMins <= 9){
                console.log(`${diffHours}:0${diffMins} hours before the start`)
            } else{
                console.log(`${diffHours}:${diffMins} hours before the start`)
            }  
        }
    }
}
//onTime(["11", "30", "10", "55"])
//onTime(["16", "00", "15", "00"])
//onTime(["11", "30", "8", "22"])

//onTime(["9", "30", "9", "50"])
//onTime(["9","00","10","30"])
//onTime(["9","00","11","9"])
//onTime(["11","30","12","29"])

//onTime(["10", "00", "10", "00"])
//onTime(["9", "00", "8", "30"])
//onTime(["9", "00", "8", "51"])
//onTime(["14", "00", "13","55"])