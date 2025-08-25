const dbconnect = require('./dbconnect');

const deletedata = async ()=>{
    let data = await dbconnect();
    let result = await data.deleteOne(
        {name:"Adit Kumar"}
    );  
}
deletedata();