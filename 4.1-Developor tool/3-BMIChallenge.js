//Create your function below this line.




/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal around 20 in this case.

*/

var bmi = bmiCalculator(80, 2); 
console.log(bmi);


function bmiCalculator(weight, height){
    var bmi = Math.round(weight / (Math.pow(height, 2)));

    if (bmi < 18.5){
        var interpretation = "Your BMI is " + bmi + ", so you are underweight.";    
    }
    if ( bmi > 18.5 && bmi < 24.9){
        var interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if ( bmi > 24.5 ){
        var interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }        

    return interpretation;
}