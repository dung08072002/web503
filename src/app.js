// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Routing
app.use("/api", productRouter);

// Connnect database
mongoose.connect('mongodb://localhost:27017/we16306').then(() => console.log('Connect success database'))
// Connect
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
