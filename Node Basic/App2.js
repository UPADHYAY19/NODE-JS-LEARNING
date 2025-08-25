const App1 = require('./App1')
// console.log(App1.y());
const names = [
  "Aarav",
  "Sanya",
  "Rohan",
  "Meera",
  "Kabir",
  "Isha",
  "Dev",
  "Anaya",
  "Yash",
  "Priya"
];
const newarr=names.filter((name)=>{
    
    return name.startsWith("A");
    
})

console.log(newarr);
