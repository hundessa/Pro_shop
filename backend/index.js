import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import productRouter from './routes/productRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Cookie parser middleware
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
