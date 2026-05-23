//This is used for current context in code or ccurrent value
const user = {
    username:"Shashank",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) 
    }

}
// user.welcomeMessage()
// user.username = "Ishu"
// user.welcomeMessage()  // ishu in output because of current context xhange

// console.log(this);

// this is not used or output undefined inside function it only work in object
// function sammy(){
//     let username = "shashank"
//     console.log(this.username);
// }
// sammy();

// +++++++++++++++++++++++++++++++++    Arrow  Function ++++++++++++++++++++++++


const chai = () =>{
    let username = "Shashank" 
    console.log(this.username);
}
// chai()


const addTwos = (num1,num2) =>{
    return num1 + num2
}
// console.log(addTwo(3,4))
     /////////////////////  or /////////

// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(3,4))


const addTwo = (num1,num2) => ({username:"Shashank"})

console.log(addTwo(3,6))
