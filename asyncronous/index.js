console.log("my name is sanyam");
setTimeout(()=>{
    console.log("i am 21 years old");
    
},2000);
console.log("i love coding");

// drawback of this 

let a = 10;
let b = 0;
setTimeout(()=>{
    b=100;
},1000)

console.log(a+b);


