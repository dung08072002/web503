import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import productRouter from './routes/product';
import categoryRouter from './routes/category';
import authRouter from './routes/auth';


const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

// Routing
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);

// Connnect database
mongoose.connect('mongodb://localhost:27017/we16306').then(() => console.log('Connect success database'))

// Connect
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
//
