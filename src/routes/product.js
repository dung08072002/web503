import { Router } from 'express';
import { create, get, list, remove, searchProduct, update } from '../controllers/product';
import { checkAuth, isAuth, requireSignin } from '../middleware/checkAuth';
import { userById } from '../controllers/user';

const router = Router();

router.get('/products', list); //Get all products
router.get('/products/:slug', get); //Get a product follow slug key
router.post('/products', create); //Create product
router.put('/products/:slug', update); //Update product
router.delete('/products/:id', remove); //Delete products
router.get('/search', searchProduct); //Search product

router.param("userId", userById)    

export default router;