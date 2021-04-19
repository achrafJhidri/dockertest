const express = require("express");
const MongoClient = require("mongodb").MongoClient;
let count ;

MongoClient.connect("mongodb://db",{useUnifiedTopology:true},(err,client) =>{
    if (err)
        console.log(err);
    else
        count = client.db("test").collection("count");
})



const app = express();

app.get("*",(req,res) => {
    count.findOneAndUpdate({},{$inc :  {count : 1 }},{returnNewDocument:true})
    .then((doc) =>{
        const cnt = doc.value.count;
        res.status(200).json(cnt);
    })

})

app.listen(80);