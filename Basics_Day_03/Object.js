// singleton -> koi constructor singleton bnta hai

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Shashank",
    "Full name" : "Shashank Shekhar",
    [mySym] : "Mykey1", // symbol ki trah use krna hai to swuare bracket
    age:18,
    location:"Mathura",
    email:"Shashankshekhargiri2003@gmail.com",
    isLoggedIn:false
}

// console.log(jsUser.email)
// console.log(jsUser["Full name"])
// // upside both are types of declaration

// console.log(jsUser[mySym]) // sym decla


// jsUser.email = "shashankgiri@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "shashankgiri@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello js user")  // o/p undefined
}

console.log(jsUser.greeting())
