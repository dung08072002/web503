import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get('/products', list); //Get all
router.get('/product/:slug', get); //Get one
router.post('/product', checkAuth, create); //Create
router.delete('/product/:id', checkAuth, remove); //Delete
router.put('/product/:slug', checkAuth, update); //Update

export default router;