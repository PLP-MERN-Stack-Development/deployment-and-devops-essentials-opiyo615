import express from "express";
import dotenv from "express";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// connect to DB
connectDB();

//Routes
app.get("/",(req, res)=> res.send("Backend is running"));
app.get("/health", (req, res)=>
res.send({status: "ok"}));

// Error handling middleware
app.use((err,req,res, next)=>{
    console.error(err.stack);
    res.status(500).json({message: "something went wrong!"});
});
const PORT = process.env.Port || 5000;
app.listen(PORT, ()=> console.log('server running on port ${PORT}'));