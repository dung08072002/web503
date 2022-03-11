// const express = require("express");
import express from 'express';
import productRouter from './routes/product';

const app = express();
// middleware
app.use(express.json());

// Routing
app.use("/api", productRouter);

// Connect
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
