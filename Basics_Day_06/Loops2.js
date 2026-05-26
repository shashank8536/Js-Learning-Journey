const myObject = {
    js:'javaScript',
    cpp:'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for object to iterate we use for in loop
// in for in loop we get key as a result from which we have to extract value

for (const key in myObject) { 
      //console.log(`${key} shortcut is for ${myObject[key]}`)
}
// for value console.log(myObject[Key]);

const programming = ['Java','Cpp','rb','Js'];

for (const key in programming) {
    console.log(programming[key])
    
    
}