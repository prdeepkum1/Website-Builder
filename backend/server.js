


import express from 'express';
import dotenv from "dotenv"
import connectedDB from "./database/db.js"
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser"
import cors from "cors"
import websiteRoute from "./routes/websiteRoute.js"

dotenv.config();
const app = express();
// connectedDB();

// middleware
app.use(express.json());
// app.use(cookieParser())
// connected backend to frontend
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(cookieParser())

const PORT= process.env.PORT || 4000;

app.use("/api/auth", authRouter)
app.use("/api/website", websiteRoute)

app.listen(PORT, () => {
    connectedDB();
    console.log(`Server is listening at port:${PORT}`)
})

export default app;