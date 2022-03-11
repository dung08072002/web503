import { Router } from 'express';
import { create, get, list, remove, update } from '../controller/product';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, get);
router.post('/products', checkAuth, create);
router.delete('/products/:id', checkAuth, remove)
router.put('/products/:id', checkAuth, update)

export default router;