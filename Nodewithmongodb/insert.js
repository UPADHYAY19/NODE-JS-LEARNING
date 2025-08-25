const dbconnect = require('./dbconnect');

const insert =async()=>{
    let data = await dbconnect();
    let result = await data.insertMany([
        {name:"Adit",pass:"adit123"},
        {name:"surya",pass:"surya123"},
        {name:"prateek",pass:"prateek123"},
        {name:"shivam",pass:"shivam123"},
    ]);
    

}
insert();