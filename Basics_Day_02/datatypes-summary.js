// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123');  // unique
// const anotherId = Symbol('123');

// console.log(id === anotherId);

//Non-Primitive (Refrence type)
// Array, Object, Functions, 

// const heroes = ["Shaktimaan", "naagraj","doga"]
// let myobj = {
//     name:"hitesh",
//     age:22
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof id)

// typeof operator value 
/*
undefined -> undefined
null -> objecct
boolean -> boolean 
number -> number
string -> string
function -> obj function
bigint -> undefined
*/

// ++++++++++++++++++++++++++++++++++++ Memory in js +++++++++++++++++++++++++++

// Primitive data type(Stack memory use)

// Non promitive datatype(Heap memory uses)

// in satck apkko copy milta hai orignal mein koi cahnge nhi aata hai

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)


// heap eg referrence jaata hai and agar change kiye to duplicate nhi pura refrence hi cahnge ho jaata hai
let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "shashank@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);