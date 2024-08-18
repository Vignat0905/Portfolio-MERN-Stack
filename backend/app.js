import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from './routes/User.js';
import path from "path";
import cors from "cors"; // Import cors

const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'https://portfolio-1-ofiz.onrender.com', // Replace with your frontend URL
  credentials: true // Enable credentials if you are using cookies or other credentials
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use("/api/v1", userRouter);

// // Serve static files from the React app
// app.use(express.static(path.resolve("./frontend/build")));

// // The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve("./frontend/build/index.html"));
// });

export { app };
