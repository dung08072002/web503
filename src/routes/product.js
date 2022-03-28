import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth, isAuth, requireSignin } from '../middleware/checkAuth';
import { userById } from '../controllers/user';

const router = Router();

router.get('/products', list); //Get all products
router.get('/products/:slug', get); //Get a product follow slug key
router.post('/products/:userId', requireSignin, isAuth, create); //Create product
router.put('/products/:slug', checkAuth, update); //Update product
router.delete('/products/:id', checkAuth, remove); //Delete products

router.param("userId", userById)

export default router;