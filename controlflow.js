// let a= 'Ali';
// let b= 5
// console.log(typeof a+b)

// const a= {
//     name= 'Ali'
//     age= 22
//     isstudent= true
// }

// const dict= {
//     hi: 'hello',
//     bye: 'gone',
//     he: 'smiling'
// }
// console.log(dict.he)

// let marks= [10, 12, 13, 14, 15, 17, 20, 1, 4, 7, 6,]
// var length= marks
// marks[7]= 90
// marks[8]= 11
// marks[9]= 0
// marks[0]= 0
// marks[4]= 0
// console.log(marks)

// function avg(a,b) {
//     return Math.round((a+b)/2)
// }
// let a=87;
// let b=92;
// console.log("Average of two Subjects is", avg(a,b))

// function avg(a,b) {
//     return Math.round((a+b)/2)
// }
// let a= 10;
// let b= 9;
// console.log('Average of a and b is', avg(a,b))

// function CalculateLength(arr) {
//     console.log('Calculate Array Length', +arr.length)
// }
// marks= [2, 4, 5, 2, 13, 54, 34, 13, 21, 12, 31]
// CalculateLength(marks);

//Arrow Function
// const sum = () => {
//     return(a+b)
// }
// console.log(sum(2+32))

// const sum = (a, b) => a+b;

// console.log(sum(1,2));

//if/else Conditions
// let age=8
// if(age>0 && age<15) {
//     console.log("Not Eligible for driving")
// }
// else if (age>15 && age<18) {
//     console.log("Again Not Eligible for driving")
// }
// else{
//     console.log("Eligible for driving")
// }

// let day= "Friday";
// switch(day) {
//     case "Monday":
//         console.log("It is start of week");
//         break;
//     case "Wednesday":
//         console.log("It is mid of week");
//         break;
//     case "Friday":
//         console.log("It is almost start of weekend");
//         break;  
//     default:
//         console.log("It is mid of week");
// }

//For Loop Ex 1
// for(let i=1; i<=10; i++) {
//     console.log("Print", i);
// }

//For Loop Ex 2
// let coding= ["JavaScript", "Python", "Cpp"]
// let length= coding.length;
// let index=length-1;
// console.log("Length of an array is", length)
// console.log("Index of an array is", index)
// for (let i=0; i<coding.length; i++) {
//     console.log(coding[i]);
//     for (let j=1; j<3; j++) {
//         console.log("Inner Loop", j)
//     }
// }

// While Loop
// let i=16;
// while(i<=20) {
//     console.log("Number is printed", i);
//     i++;
// }

// Do While Loop
// let i=9;
// do {
//     console.log(i)
//     i++
// }
// while(i<=7)

//Break and Continue
// let i=0;
// for (i=0; i<=11; i++) {
//      
//         break;
//    
//     console.log("Print Numbers", i);
// }

//For of in loops // used when u need values directtly
// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// For in in loops // used when u need keys directtly
// let person = { 
//     name: "Ali", 
//     age: 22, 
//     city: "Lahore"
//  };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// Five Programs

// Even or odd
// let num=45
// if(num%2 ==0){
//     console.log('Even')
// }
// else{
//     console.log('Odd')
// }

// Number to word using switch
// let num=2;
// switch(num){
//     case 1:
//         console.log('One');
//         break;
//     case 2:
//         console.log('One');
//         break;
//     case 1:
//         console.log('One');
//         break;
// }

// Sum of numbers 1 to 10 using Loop
// let sum= 0;
// for(let i=1; i<=10; i++) {
//     sum +=i ;
// }
//    console.log('Sum of Numbers between 1 and 10', sum)

// Count down using while Loop
// let a=9;
// while(a>0) {
//     console.log(a);
//     a--;
// }

//List fruits using for of
// let fruits= ['apples', 'mango', 'grapes']
//     for(let fruit of fruits) {
//             console.log(fruit);
//     }

// Simple Calculator using Functions
// function add(a,b) {
//     return a+b;
// }
// function subtract(a,b) {
//     return a-b;
// }
// function multiply(a,b) {
//     return a*b;
// }
// function divide(a, b) {
//     return a/b;
// }

// console.log('Add Two Numbers', add(4,2));
// console.log('Subtract Two Numbers', subtract(4,2));
// console.log('Multiply Two Numbers', multiply(4,2));
// console.log('Delete Two Numbers', divide(4,2))



// const word = 'Two' // One || Two || Three
// switch(word) {
//     case "One":
//         console.log('1');
//         break;
//     case "Two":
//         console.log('2');
//         break;
//     case "Three":
//         console.log('3');
//         break;
// }

//Using Objects;
const input = 'Three';

const word={
    One: '1',
    Two: '2',
    Three: '3'
}
console.log(word[input])
