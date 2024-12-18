import express, { Router } from "express";
import Task from "../models/Task.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).send("server erroror");
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({error:error.message});
  }
});

router.put("/:id",async (req,res)=>{
    try{
        const item=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(item);
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
});

router.delete("/:id",async (req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json({message:"Task Sucessfully deleted"});
    }catch(error){
        res.status(400).json({error:error.message});
    }
})

export default router;

