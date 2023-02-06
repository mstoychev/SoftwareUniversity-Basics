function numbersEndingIn7(){
    //Напишете функция, която отпечатва числата в диапазона от 1 до 1000, които завършват на 7. 
    // acordarse que de 1555 si lo divido entre 10 y me quedo con el resto es el útimo numero -> división modular % 10.
    for (let i = 1; i <= 1000; i++) {
        if (i % 10 == 7){
            console.log(i)
        }
    }
}
//numbersEndingIn7()