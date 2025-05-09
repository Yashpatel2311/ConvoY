import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true,
  })
);

const PORT = process.env.PORT || 5005;
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(5001, () => {
  console.log("server start running on PORT:" + PORT);
  connectDB();
});
