(function chai(){
    console.log("DB Connected");
}) (); // Immediately Invoked Function Expressions
// the first parenthesis encloses the function and the second at the end is for execution.
// ; is must as iife doesnt know the context stop.

((name) => {
    console.log(`DB Not connected by ${name}`);
}) ("Koushik");

// basically, we are defining the function in its call itself.