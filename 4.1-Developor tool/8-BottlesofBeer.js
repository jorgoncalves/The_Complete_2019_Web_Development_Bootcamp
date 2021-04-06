var numberOfBeers = 99;

function beer(){    
    
    while (numberOfBeers >= 0 ){

        if(numberOfBeers > 0){
            console.log(numberOfBeers + " bottles of beer on the wall, " + numberOfBeers + " bottles of beer.");
            console.log("Take one down and pass it around, " + (numberOfBeers - 1) + " bottles of beer on the wall.");
            console.log(" ");
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer. ");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        numberOfBeers--;    
    }
}

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }