function histogram(input) {
    let totalNum = Number(input[0]);
    let p1 = 0;   // COUNT !!!!!!!!!!!!!!!!!!!!
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= totalNum; i++) {                // aquí me lié. i <= 1000 NO, es el número de ciclos
        let num = input[i];
        if (num < 200) {
            p1++;            
        } else if (num < 400){
            p2++;
        } else if (num < 600){
            p3++;           
        }else if (num < 800){
            p4++;           
        } else if (num >= 800){
            p5++;                        
        }
    }

    let p1Percentage = (p1 / totalNum) * 100    // para el porcentaje no se usa i/total num*100
    let p2Percentage = (p2 / totalNum) * 100
    let p3Percentage = (p3 / totalNum) * 100
    let p4Percentage = (p4 / totalNum) * 100
    let p5Percentage = (p5 / totalNum) * 100

    console.log(p1Percentage.toFixed(2) +"%");
    console.log(p2Percentage.toFixed(2) +"%");
    console.log(p3Percentage.toFixed(2) +"%");
    console.log(p4Percentage.toFixed(2) +"%");
    console.log(p5Percentage.toFixed(2) +"%");
}
/*histogram([
    "3",
    "1",
    "2",
    "999",
]) */
