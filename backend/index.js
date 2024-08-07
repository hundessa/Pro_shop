// import express from "express";
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/mongodb.js'
// import productRouter from "./routes/productRoutes.js";
// import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

// dotenv.config();

// connectDB();

// const port = process.env.PORT

// const app = express();
// app.use(cors());

// app.get("/", (req, res) => {
//     res.send("API is running...")
// })

// app.use('/api/products', productRouter);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port || 5000, () => {
//     console.log('server on port 5000...');
// }) 


// server.js or app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import productRouter from './routes/productRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

// Comment out the database connection if you're not using it
// connectDB();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
