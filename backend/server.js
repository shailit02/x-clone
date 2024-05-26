import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import notificationRoute from "./routes/notificationRoute.js"

import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary"
import postRoute from "./routes/postRoute.js";

dotenv.config()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json({ limit: "5mb" })) //to parse req.body 
//limit should'nt be too high to prevent DOS
app.use(express.urlencoded({ extended: true })); //to parse form data

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute)
app.use("/api/notification", notificationRoute)




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();

});