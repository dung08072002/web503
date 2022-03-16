import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get('/products', list); //Get all products
router.get('/product/:slug', get); //Get a product
router.post('/product', checkAuth, create); //Create product
router.put('/product/:slug', checkAuth, update); //Update product
router.delete('/product/:id', checkAuth, remove); //Delete products

export default router;