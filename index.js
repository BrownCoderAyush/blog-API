const express = require("express");
const bodyParser = require('body-parser');
const app = express();


const PORT = 3000;
// middleware layer between user and api 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let blogs = [];

app.get('/blogs' , (req,res)=>{
     res.status(200).json({
        data : blogs,
        success : true
    })
}) 
app.post('/blogs',(req,res)=>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.content);
    
    let obj = {
        title:req.body.title,
        content:req.body.content
    }
    // console.log(obj);
    blogs.push(obj);
    res.json(req.body);
    
    // console.log(req.body);
})
app.listen(PORT,()=>{
    console.log("server started running at port " , PORT);
})