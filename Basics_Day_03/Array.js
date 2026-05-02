// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraaj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // insert on start of array
// myArr.shift() // remove 1st element

// console.log(myArr.includes(9)) // it gives false as output
// console.log(myArr.indexOf(9)) // -1 output bec not exist 

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr)

///       Slice and splice 

// console.log("A ",myArr)

// const myn1 = myArr.slice(1,3);  // only inclure iindex 1 and 2 not 3 

// console.log(myn1);
// console.log("B ",myArr);

// const myn2 = myArr.splice(1,3); // it include 1,2,3 but one more diff it changes in original array
// console.log("c" , myArr) // in original array only 0 4 5 left 
// console.log(myn2)

// 02 array
const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros= ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)  // return in new array 

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

// const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]];

// const real_array = another_array.flat(Infinity) // all in one array

// console.log(real_array);

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Shashank"))
// console.log(Array.from({name:"hitesh"})) // interesting retiurn [] array

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3));
