const js1user = new Object(); // creates singleton object
const js2user = {}; // creates non-singleton object

const obj1={1 :"a", 2 :"b"};
const obj2={3:"c", 4:"d"};

const obj3={obj1,obj2};
console.log(obj3); // adds the objects directly as elements in obj3.

const obj4=Object.assign({},obj1,obj2);
console.log(obj4); // adds each key-value pair distinctly.
// {}-Destination and the objects obj1,obj2 are the sources. 

const obj5=Object.assign(obj2,obj1);
console.log(obj2);
console.log(obj5); // adds obj1 to obj2 and then copies obj2 into obj5.

const obj6={...obj1,...obj2};
console.log(obj6); // using spread operator.

// Databases usually give data as array of objects.

console.log(Object.keys(obj4)); // array of keys
console.log(Object.values(obj4)); // array of values
console.log(Object.entries(obj4)); // array of arrays of the key-value pairs.

console.log(obj4.hasOwnProperty('3')); // true
console.log(obj4.hasOwnProperty('7')); // false

