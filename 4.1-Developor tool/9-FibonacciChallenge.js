function fibonacciGenerator(n) {
    
    var fibonacciArray = [];

    if (n == 1){
        fibonacciArray = [0];
        console.log(fibonacciArray);
    }else if (n == 2){
        fibonacciArray = [0, 1];
        console.log(fibonacciArray);
    }else{
        
        fibonacciArray = [0, 1];
        
        for (var i = 2; i < n ; i++){
            
            var firstVar = fibonacciArray[i-2];
            var secondVar = fibonacciArray[i-1];
            var newValue = firstVar + secondVar;
            fibonacciArray.push(newValue);
            console.log(fibonacciArray);
        }
    }
    return fibonacciArray;
}

