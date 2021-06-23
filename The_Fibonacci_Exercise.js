function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var result = [ ] ;
    if ( n === 1 ){
       result = [ 0 ];
    } 
    else if ( n === 2 ){
        result = [ 0, 1 ];
    }
    else{
        result = [ 0, 1 ];
        for (var i=3 ; i=n ; i++){
        result.push(result[result.length - 2] + result[result.length -1]);
        }
    return result ;
    }
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
