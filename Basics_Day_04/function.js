function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("K");
}

// sayMyName();

// function sum(a, b) { // parameters
//     console.log(a + b);
// }

function sum(a, b) { // parameters
    let result = a + b;
    return result;
}
// afetr return result if you write anything it won't print anything 
const result = sum(3, 4); // arguments
// console.log(result)

// if 3 and "4" then it take 3 also as a string and made a output "34";
// if 3 and "a" then output 3a

function loginUserMessage(username = "sammy"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shashank"))
// console.log(loginUserMessage("ishu"))
// if you not pass any value in argument then o/p as undefined just logged in


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username:"Shashank",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);

handleObject({
    username:"Sammy",
    price:543
})

const myNewArray = [200, 400, 600, 654];

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray))