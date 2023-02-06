function trekkingMania(input){
    let numGrups = Number(input[0]);    
    
    let groupMusala = 0;
    let groupMonblan = 0;
    let groupKilimandjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    for (let i = 1; i <= numGrups; ++i){
        let group = Number(input[i]);

        if (group <= 5){            
            groupMusala += group;  
                      
        } else if(group >= 6 && group <= 12){            
            groupMonblan += group;              

        } else if(group >= 13 && group <= 25){            
            groupKilimandjaro += group;           
                        
        } else if(group >= 26 && group <= 40){            
            groupK2 += group;               
            
        } else {            
            groupEverest += group;                        
        }
    }
    let totalGroup = groupMusala + groupMonblan + groupKilimandjaro + groupK2 + groupEverest;
   
    console.log(((groupMusala / totalGroup * 100).toFixed(2) + "%"));
    console.log(((groupMonblan / totalGroup * 100).toFixed(2) + "%"));
    console.log(((groupKilimandjaro / totalGroup * 100).toFixed(2) + "%"));
    console.log(((groupK2 / totalGroup * 100).toFixed(2) + "%"));
    console.log(((groupEverest / totalGroup * 100).toFixed(2) + "%"));
}
//trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
//trekkingMania(["5", "25", "41", "31", "250", "6"])
