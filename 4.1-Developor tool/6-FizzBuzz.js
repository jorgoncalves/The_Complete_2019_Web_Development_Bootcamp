// var output = [];

// function fizzBuzz(){
//     var lastPosition = output.length;
//     console.log("lastPosition:" + lastPosition);
//     var nextValue = lastPosition + 1; 
//     console.log("nextValue: " + nextValue);
//     output.push(nextValue);
//     console.log(output);
// }

var output = [];
var count = 1;

function fizzBuzz(){
    while ( count <= 100){
        if ( (count % 3 === 0) && (count % 5 === 0)){
            output.push("FizzBuzz");
        }else if (count % 3 === 0){
            output.push("Fizz");
        }else if ( count % 5 === 0){
            output.push("Buzz");
        }else{
        output.push(count);
        }
        count++;
    }
    console.log(output);
}