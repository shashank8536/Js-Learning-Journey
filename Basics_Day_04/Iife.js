// Immediately Invoked Function Expressions(IIFE)

// (function chai(){
//     console.log('DB Connected')
// })
// ()

// global scope k polliution se problem hoti hai kaibaar to useke declaration ko htane k liye iife ka use krte hai
//end krne k liye last mein ek semicolon ki jarurat pdti hai


(()=>{
    console.log('BD connected')
})
();

// named iifi
(function chai(){
    console.log('Connected');
}) ();

//not name iifi
((name) =>{
    console.log(`DB COnnected two ${name}`);
}) ('hitesh') 
