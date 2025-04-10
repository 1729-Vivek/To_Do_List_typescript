import inquirer from "inquirer";
import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db";
import taskRoutes from "./routes/taskRoutes"

dotenv.config();

const app=express();

const PORT=process.env.PORT || 5000;

app.use(express.json());

app.use("/api",taskRoutes);

connectDB();

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})

