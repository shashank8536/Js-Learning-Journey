// 
let a = 453;
if(true){
    let a = 10;
    const b = 20
    // var c = 30
}

// console.log(a); print 453


// console.log(b);
// console.log(c);

function one(){
    const username = "Shashank"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}
one();


// +++++++++++++++++++ Interesting ++++++++++++++++++++++++

function addOne(num){
    return num+1
}
addOne(5)

const addTwo = function(num){ // function or kbhi kbhi exxpression bhi bola jaata hai
    return num + 2 
}

addTwo(5)