let a = 10;
let b = 10;

let data = new Promise((res,rej)=>{
    b=30;
    res(b);

})

data.then((b)=>{
 console.log(a+b);
 
})