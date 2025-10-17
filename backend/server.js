import express from "express";
import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./db/mongoDB.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongoDB();
});