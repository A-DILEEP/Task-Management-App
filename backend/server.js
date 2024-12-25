import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "../backend/routes/taskRoutes.js";

dotenv.config();

const app = express();
const allowedOrigins = [
  "https://task-management-app-six-ecru.vercel.app",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE",
  })
);


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
