// Destructuring in JavaScript
// Destructuring is a shortcut to extract values from arrays or objects and assign them to variables in one line.

// Destructuring in Arrays
let [b, a, c,...d]= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Destructuring in Objects
const laptop = {
    model: 'HP',
    specs: '8GB',
    price: 20000,
    year: 2025,
    display:{
        resolution:'1080',
        hz: '60'
    }
}
const {model, specs, price}= laptop
console.log(model, specs, price)
const {model, ...remaining}= laptop
console.log(model, remaining)

const laptop2 = laptop
laptop2.year=2000;

const laptop2 = {...laptop} //shallow vs deep
laptop2.year=2000;

//--------------------------------------------------------------------------------------------

//Templete Lierals
// ES5
// Ex 1
let name='Ali';
console.log('Welcome ' + name + '! How are you?')

// Ex 2
let name='Ali';
let res='Welcome '
+name;    //If we want to use next line in ES5
console.log(res)

// ES6
let name='Ali';
console.log(`Welcome ${name} ! How are you?`)

// Ex 2
let name='Ali';
let res= `Welcome to    
the Country ${name} !`  //If we want to use next line in ES5
console.log(res)

//--------------------------------------------------------------------------------------------

// Spread and Rest Operators
// Spread Operator  
const oldArray = [1,2,3,4,5]
const newArray = [...oldArray,6,7,8,9,10,11,12,13,14,15]
console.log(newArray)

//Rest Operator
const sum = (a,b,c,d,e) => (a+b+c+d+e)
console.log(sum(4,3,6,4,8))
const sum = (...numbers) => {
    let total=0;
    numbers.forEach((n) => {
        total+=n;
});
    console.log(total);
}
sum(1,2,3,4,5,6);

//--------------------------------------------------------------------------------------------

// Array methods (map, filter, reduce, forEach
// Map Functions
// Ex 1
// print objects with key binary
const arr = [2,5,16,3,8];
function binary(item, index) {
    const obj = {
        name: item.toString(2)
    }
    return obj;
}
const output = arr.map(binary);
console.log(JSON.stringify(output));

const arr = [2,5,16,3,8]
function multipleOf10(item) {
    const str = item*10;
    return str;
}

const output = arr.map((item, index)=>{
    const str = item*10;
    return str;
});
console.log(output)
console.log(arr)

// Ex 2
const students = [
    {firstName: "Ali", lastName: "Raza", age: 22},
    {firstName:'Ejaz', lastName:'Kiani', age: 21},
    {firstName:'Nisar', lastName:'Khan', age: 24},
];
const output= students.map((x) => x.firstName + ' ' + x.lastName);
console.log(output);

// Filter Functions
const arr = [3,4,6,8,7,13];
function isOdd(x) {
    return x%2;
}
const output = arr.filter(isOdd);
console.log(output);

const fruits= ['apple', 'grapes', 'cherry', 'banana', 'orange', 'blackberries'];
function lengthGreaterThan5(x) {
    var length= fruits.length;
    return x.length===5;
}
const output = fruits.filter(lengthGreaterThan5);
console.log(output);

// one array of under 18 and one with 7 ft
const persons = [
    {name: "Ahmad", age: 14, height: 6},
    {name: "John", age: 22, height: 5.9},
    {name: "Max", age: 25, height: 5.5},
    {name: "Adam", age: 15, height: 7.2},
    {name: "Saad", age: 19, height: 7.2},
]
function under18(x) {
    return x.age<18;
}
function height(y) {
    return y.height>7;
}
const output = persons.filter(under18);
const output2 = persons.filter(height);
console.log(JSON.stringify(output));
console.log(JSON.stringify(output2));

// For Each Loop
var student = ['Ali', 'Nisar', 'Khan'];
student.forEach(function(name, length, index) {
    console.log(name);
    console.log(length);
    console.log(index);
});

//--------------------------------------------------------------------------------------------

//Destruction in Arrays
let [a,b,...c]= [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(a);
console.log(b);
console.log(c);

//Destructing in Objects
const student= {
    name: 'John',
    deg: 'MS',
    school: 'Eng Medium',
    div: 10,
    age: 34,
    shirt: {
        colour: 'red',
        size: 'large',
    }
};
console.log(student.shirt);

//Templete Literals
const name= 'Ali';
const age= 22;
console.log(`Hello!
    My name is ${name} 
    and I am ${age} years old.`);

//Spread Functions
var fruits= ['Apples', 'Banana', 'Mangoes'];
var moreFruits= [...fruits,'Grapes', 'Cherry'];
console.log(moreFruits);

//Rest Functions
function numbers(a,b,...others) {
    console.log(a);
    console.log(b);
    console.log(others);
}
numbers(1,2,3,4,5);

//For Each Loop
const fruits= ['Oranges', 'Apples', 'PineApple', 'Grapes'];
fruits.forEach(fruit => {
    console.log(fruit);
});

//Map Functions
var num = [5,2,4,2,5];
function double(x) {
    return x * 2;
};
const output = num.map(double);
console.log(output);

//Filter Functions
const arr= [3,6,4,2,7,8,2,9,15,12,10];
function lessThan5(x) {
    return x<7;
};
const output = arr.filter(lessThan5);
console.log(output);