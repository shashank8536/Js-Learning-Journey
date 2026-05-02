let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);  // object

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());  
// month start from 0 in javascript


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

// for change in second
// console.log(Math.floor(Date.now()/1000));;

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
})


