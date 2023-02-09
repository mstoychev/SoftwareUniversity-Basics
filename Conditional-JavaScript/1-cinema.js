function cinema(input){
    let typeProyection  = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    totalMoney = 0;

    if (typeProyection === "Premiere"){
        totalMoney = 12 * rows * columns
    } else if(typeProyection === "Normal"){
        totalMoney = 7.5 * rows * columns
    } else if(typeProyection === "Discount"){
        totalMoney = 5 * rows * columns
    }

    console.log((totalMoney).toFixed(2) + " leva")
}
//cinema(["Premiere", "10", "12"])
//cinema(["Normal", "21", "13"])
//cinema(["Discount", "12", "30"])