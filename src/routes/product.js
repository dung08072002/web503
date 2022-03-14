import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get('/products', list); //Get all
router.get('/products/:id', get); //Get one
router.post('/products', checkAuth, create); //Create
router.delete('/products/:id', checkAuth, remove); //Delete
router.put('/products/:id', checkAuth, update); //Update

export default router;