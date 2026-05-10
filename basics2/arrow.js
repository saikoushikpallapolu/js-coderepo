const user={
    name: "Koushik",
    age: 18,

    welcome(){
        console.log(`Welcome ${this.name}`)
        console.log(this); // THIS keyword stores the context of the program.
    }
}

user.welcome();
user.name="Virat";
user.welcome(); // THIS keyword changes the name and saves the context to virat.

console.log(this); // empty object, in browser window is the global object so that is printed.

const chai = function(){
    let name="Rohit";
    console.log(this.name);
}

chai(); // Undefined, THIS keywords doesnt work in the functions in the same way.

const chai2 = (num1,num2) => {
    return num1+num2;
} // () => {} creates an arrow function.

result = chai2(9,8);
console.log(result);

const chai3 = (n1,n2) => (n1+n2); // implicit return of the fucntion.
// the parenthesis can have an object as well like ({name: "koushik"});
console.log(chai3(7,6));
