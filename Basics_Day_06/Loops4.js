// +++++++++++++++++++++  filter operation +++++++++++++++++++++++

const Nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = Nums.filter( (item) => {
//     return item>4;
// })

// const newNums = []

// Nums.forEach( (num)=>{
//     if (num>4) {
//         newNums.push(num);    
//     }
// })

// console.log(newNums)


// when we use curly braaces then scope have been started then we have to return a statemenyt or print that in function case also same rule apply

// eg we have to filter genre of book which belongs to history
// const userBooks = books.filter((bk)=> bk.genre === 'History) then print


// --------- >>>>>>>>>>>>>>>>>> Map <<<<<<<<<<<<<<<<<<<<<<<<------------

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => num+10)
const newNums = myNums.map((num)=>{
    return num*10
}).map((num)=>num +1 ).filter((item)=> item>30)

// console.log(newNums)


// ----------------->>>>>>>>>>>>>   REDUCE <<<<<<<<<<<<<<-----------------
const num = [1,2,3]

const myTotal = num.reduce(function (acc,currval){
    return acc + currval
},0)

console.log(myTotal)