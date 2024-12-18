import mongoose from "mongoose";

const TaskScheme=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    isCompleted:{type:Boolean,default:false},
});

const task=mongoose.model("Task",TaskScheme);

export default task;
