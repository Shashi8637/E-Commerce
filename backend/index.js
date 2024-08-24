import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "../backend/database/db.js";
import cors from "cors";
import productRoutes from "./routers/productRoute.js";


dotenv.config({
    path: './.env'
})

const app = express();

const PORT = process.env.PORT;


//middleware
app.use(express.json());
app.use(cors());




//Routes
app.use("/product/v1",productRoutes)












app.get("/",(req,res)=>{
    res.send("Hello, Server!")
})

dbConnection();


app.listen(PORT,(req,res)=>{
    console.log(`Server is running ${PORT}`)
})