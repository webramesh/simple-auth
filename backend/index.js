import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {connectDB} from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({origin: "http://localhost:5173", credentials: true}));

app.use(express.json()); // allows us to parse incoming request with payload json (req.body)
app.use(cookieParser()); // allows us to parse incoming cookies

app.use('/api/auth', authRoutes);



app.listen(PORT, () => {
    connectDB();
    console.log("Server running on port: ", PORT);
});


