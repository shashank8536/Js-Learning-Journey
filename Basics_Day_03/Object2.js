// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLogged = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shashank",
            lastname: "Shekhar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

// combine/merge arrays
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1,obj2) // static method copy from one or more source obj
// in obj.assign there is 2 parameteres pass through it source and target

//use spread operator
const obj3 = {...obj1, ...obj2}

// console.log(obj3);
// console.log(tinderUser)

const users = [
    {
        id:1,
        email:"shashank@gmail.com"
    },
    {
        id:2,
        email:"ishu@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // array of array bna deti hai


// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
     coursename:"js in hindi",
     price:"3834",
     courseInstructoer: "Shashank"
}

// course.courseInstructoer

// de structuring of objects
const {courseInstructoer: instructor} = course;

console.log(instructor);

// sometime api is in object form sometime in api form
// {
//     "name":"Shashank",
//     "coursename":"js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]