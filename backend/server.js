import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "../backend/routes/taskRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });


app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT ; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
