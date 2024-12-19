let express=require("express")
let app=express();
const cors=require("cors");
const PORT =3700;
const axios=require("axios");

app.use(cors({
    origin:"http://localhost:5174",
    methods:"POST,GET,PUT,DELETE"
}))




app.get("/test",async(req,res)=>{
 try{
    const response=await axios.get("https://dummyjson.com/users");
    res.json(response.data);
 }
 catch (error) {
    res.status(500).json({ error: "Failed to fetch data" }); // Error handling
 }
})


app.listen(PORT,()=>{
    console.log(`The Port is Running on ${PORT}`);
});

