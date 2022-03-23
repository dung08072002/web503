import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get('/products', list); //Get all products
router.get('/products/:slug', get); //Get a product follow slug key
router.post('/products', checkAuth, create); //Create product
router.put('/products/:slug', checkAuth, update); //Update product
router.delete('/products/:id', checkAuth, remove); //Delete products

export default router;