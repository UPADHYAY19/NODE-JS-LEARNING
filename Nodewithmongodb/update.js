const dbconnect = require('./dbconnect');

const update =async()=>{
    let data = await dbconnect();
    let result = await data.updateOne(
        {name:"Adit"},
        {$set:{name:"Adit Kumar"}}
       
    );
    

}
update();