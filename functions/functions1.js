function add(number1 = 0, number2= 3){ // number1 and number2 are the parameters with default values 0 and 3.
    return number1+number2;
}

// add // just refers to the function
// add() // executes the function
const result=add(); 
const result1 = add(10,5)// 10 and 5 are arguments.
console.log(result); // 3
console.log(result1); // 15

function cart(...number){ // REST operator, when the no of parameters is not known.
    return number;
}

console.log(cart(100,200,300,400)); // prints an array of these arguments.


