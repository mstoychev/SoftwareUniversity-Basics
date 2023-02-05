function oldBooks(input){
    let targetBook = input[0];
    let exitMessage = "No More Books";
    let booksCount = 0;
    let currentIndex = 1;

    while (true){
        let currentBook = input[currentIndex];
        currentIndex++
        booksCount++

        if (currentBook == targetBook){
            console.log(`You checked ${booksCount - 1} books and found it.`);
            break;
        }

        if (currentBook == exitMessage){
            console.log("The book you search is not here!");
            console.log(`You checked ${booksCount - 1} books.`);
            break;            
        }
        
    }
}
//oldBooks(["Troy", "Stronger", "Life Style", "Troy"])
//oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


