// for each loop
const coding = ["Js","Ruby","Cpp","Python","Java"]

//  coding.forEach(function (val){
//     console.log(val);
//  });

// coding.forEach((valuess) => {
//     console.log(valuess)
// });

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName: "js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName: "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})