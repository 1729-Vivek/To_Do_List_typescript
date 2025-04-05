import { Request , Response } from "express"
import { Task } from "../models/Task"

// Get tasks

export const getTasks=async(_:Request,res:Response)=>{
    const tasks=await Task.find();
    res.json(tasks)
}

//POST tasks
export const addTask = async(req:Request,res:Response)=>{
    const {title}=req.body;
    const task=new Task({title});
    await task.save();

    res.status(201).json(task);
}

export const markDone=async(req:Request,res:Response)=>{
    const task=await Task.findByIdAndUpdate(
        req.params.id,
        {completed:true},
        {new:true}
    );
    res.json(task);
}
//DELETE tasks with id
export const deleteTask=async(req:Request,res:Response)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
}