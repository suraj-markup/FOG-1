const express=require("express");
const app=express();
const cors=require("cors");
const port =5000;
const serverInfoData=require("./serverInfoData");

app.use(cors(
    {
        origin: "http://localhost:5173/",
        methods: ["GET", "POST"],
        credentials: true
      }
));

app.get('/',(req,res)=>{
    res.send("Your server is up. you can access the APIs at /server-info");
})

app.get('/server-info',(req,res)=>{
    res.json(serverInfoData);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

