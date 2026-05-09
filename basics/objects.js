
const mysymbol = Symbol("key");

const jsuser={
    name : "Koushik",
    [mysymbol]: "mykey", 
    "full name" : "Sai Koushik Reddy",
    id : "56",
    age : 18,
    email : "saikoushikpallapolu@gmail.com",
}
// the keys are default of string type.
// console.log(jsuser.full name); Doesnt work.
console.log(jsuser["full name"]); // only acces in this way.


console.log(jsuser[mysymbol]) // access symbols only using the square brackets.

jsuser["name"]="Virat";
console.log(jsuser["name"]); // changes are done.

// Object.freeze(jsuser); // freezes the object for any changes.
jsuser["id"]=4;
console.log(jsuser); // there will be no change in the values of each key in the object
// output also has symbol in the object as "Symbol(key)".

jsuser["greeting"]=function(){
    console.log("Welcome");
}
console.log(jsuser) // greeting: [Function (anonymous)] is output.
console.log(jsuser["greeting"]()); // Welcome,undefined is output.

jsuser["greeting2"]=function(){
    console.log(`Hello user with id: ${this.id}`);
}
console.log(jsuser["greeting2"]()); // the message is printed and the id is taken as well.

