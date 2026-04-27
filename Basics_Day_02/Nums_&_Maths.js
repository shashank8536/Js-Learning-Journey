const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundredss = 1000000
console.log(hundredss.toLocaleString('en-In'));


// +++++++++++++++++++++++++++    MAths ++++++++++++=

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round((4.6))); 

// ceil top value and floor the lowest falue 
console.log(Math.random());
console.log((Math.random()*10) + 1);

const min =10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);
//min se upar too hona hi chahiye and range aajaye max-min se aur 1 0 ko avoid krne k liye 