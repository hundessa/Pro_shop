import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js'
import productRouter from "./routes/productRoutes.js";
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

dotenv.config();

connectDB();

const port = process.env.PORT

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running...")
})

app.use('/api/products', productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port || 5000, () => {
    console.log('server on port 5000...');
}) 