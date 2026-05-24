const userEmail = "S@Shashank.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values
// false , 0 , -0, BigInt 0n , "" ,null , undefined, NaN

// Truthy values 
// "0","false"," ", [], {}, function(){}

if(userEmail.length===0){
    console.log("Array is Empty")
}else{
    console.log("Array is not")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
     console.log("object is empty")
}


// false ==0 // it is true
// false =='' // it is also true


// +++++++++++++++++++++++++ Nullish Coalescing Operator(???) +++++++++++++++//
// NCO ( ???): null undefined

let val1;
// val1 = 5??10
// val1 = null ?? 10
val1 = undefined ?? 15


console.log(val1)