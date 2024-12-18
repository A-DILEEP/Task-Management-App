import mongoose from "mongoose"

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL,{
        });
        console.log(`MongoDB Connected Successfully ${conn.connection.host}`);
    }catch(err){
        console.log(`There is a problem : ${err}`);
        process.exit(1);
    }
}

export default connectDB;