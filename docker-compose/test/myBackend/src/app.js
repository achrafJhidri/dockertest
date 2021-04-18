const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// let count ;

// MongoClient.connect("mongodb://db",{useUnifiedTopology:true},(err,client) =>{
//     if (err)
//         console.log(err);
//     else
//         count = client.db("test").collection("data");
// })



const app = express();

app.get("*",(req,res) => { 
    // count.findOneAndUpdate({},{$inc :  {cnt : 1 }},{returnNewDocument:true}).then((doc) =>{
    //     const cnt = doc.value.cnt;
    //     res.status(200).json(cnt);
    // })
    res.status(200).json("Hello br  other")
})

app.listen(80);