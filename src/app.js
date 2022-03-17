// const express = require("express");
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './routes/product';
import categoryRouter from './routes/category'

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Routing
app.use("/api", productRouter);
app.use("/api", categoryRouter);

// Connnect database
mongoose.connect('mongodb://localhost:27017/we16306').then(() => console.log('Connect success database'))

// Connect
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
