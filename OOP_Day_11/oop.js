const user = {
    username: "Shashank",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user Details from Database");
        console.log(`Username: ${this.username}`);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo =new User("ChaiAurCode", 11, false);

console.log(userOne.constructor); // overwrite value use new keyword
// console.log(userTwo);
