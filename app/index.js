const express = require('express');
const appid = process.env.APPID;


const app = express();
app.get("/",(req,res)=>{
    res.send(`appid: ${appid} homepage: says hello!`);
})

app.get("/app1",(req,res)=>{
    res.send(`appid: ${appid} homepage: says hello!`);
})

app.get("/app2",(req,res)=>{
    res.send(`appid: ${appid} homepage: says hello!`);
})

app.get("/admin",(req,res)=>{
    res.send(`appid: ${appid} ADMIN page: says hello!`);
})

app.listen(appid,()=>console.log(`${appid} is listening on ${appid}`))