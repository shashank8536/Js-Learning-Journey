const account_Id = 144556
let accountEmail = "shashankshekhargiri@gmail.com"
var accountPassword = "12345"
accountCity = "Himachal"
let accountState;

// account_Id = 2345; not allowed

accountEmail = "shasshasnk@.com";
accountPassword = "25446458"
accountCity = "Banglore"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState]);

console.log(account_Id);