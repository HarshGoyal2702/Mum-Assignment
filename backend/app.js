import express from "express";
import errorMiddleware from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "./config/database.js";
import product from "./routes/productRoute.js"
import user from "./routes/userRoute.js"
const app = express();

// config connection
dotenv.config({ path: "./config/config.env" });

// middlewares 
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(cors(
    {
        origin: ['http://localhost:5173'],
        credentials: true,
        sameSite: 'none'
    }
));



// Routes implementation
app.use("/api/v1/product", product);
app.use("/api/v1/user", user);

//Setting up static folder
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
// })
// Connecting the database
connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})
// middleware for error
app.use(errorMiddleware);