import express from "express";
import { userCart } from "../controllers/cart";
const router = express.Router();

router.post('/cart', userCart);

export default router;