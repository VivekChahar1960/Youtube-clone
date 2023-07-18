import  express from "express";
import mongoose from "mongoose";
import dontenv  from 'dotenv';
import bodyParser from "body-parser";
import userRoutes from './routes/user.js';
import cors from 'cors'; 

dontenv.config()

const app=express()
app.use(cors())


app.get('/',(req,res)=>{
    res.send("hello")
})

app.use(bodyParser.json())

app.use('/user',userRoutes)
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server running on the Port ${PORT}`)
})
const DB_URL="mongodb+srv://vivekchahar1960:jaat%40rsc2003@cluster0.am2yatp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB_URL,{useNewUrlParser :true ,useUnifiedTopology :true}).then(()=>
    {console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})