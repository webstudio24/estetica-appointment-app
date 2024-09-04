import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/user.js"
import esteticistaRoute from "./Routes/esteticista.js"
import reviewRoute from "./Routes/review.js"


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true
};

app.get("/", (req, res) => {
    res.send("Api is working");
});

//conexión a la base de datos
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            
        });

        console.log("Base de datos conectada");

    } catch (err) {
        console.log("La base de datos no se conectó");
    }
}


//midleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute); //domain/api/v1/auth/
app.use("/api/v1/users", userRoute); //domain/api/v1/auth/
app.use("/api/v1/esteticistas", esteticistaRoute); //domain/api/v1/auth/
app.use("/api/v1/reviews", reviewRoute); //domain/api/v1/auth/



app.listen(port, () => {
    connectDB();
    console.log("Server corriendo en el puerto" + port);
});