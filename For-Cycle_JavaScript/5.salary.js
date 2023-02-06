function salary(input){
    let penaltyFace = 150;
    let penaltyInsta = 100;
    let penaltyReddit = 50;
    let n = Number(input[0]);   //Брой отворени табове в браузъра
    let salary = Number(input[1]);
   
    for (let i = 0; i < n; i++) {
        let pageName = input[i + 2];
        if (pageName === "Facebook") {
            salary -= penaltyFace;

        }  else if (pageName === "Instagram") {
            salary -= penaltyInsta;

        } else if(pageName === "Reddit") {
            salary -= penaltyReddit;
        }        
    }  
    if (salary > 0){
        console.log(salary)
    } else{
        console.log("You have lost your salary.")
    }
} 
/*salary([
    "3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"
])*/

/* salary([
    "10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook",
]) */
