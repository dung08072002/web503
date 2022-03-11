import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

const products = [
                  {id: 1,name: "Product A",},
                  {id: 2,name: "Product B",},
                  {id: 3,name: "Product C",},
                ];

//Get all products
router.get('/products', checkAuth, (req, res) => {
  res.json(products);
});

//Get a product
router.get('/products/:id', checkAuth, (req, res) => {
  const result = products.find(item => item.id === +req.params.id);
  res.json(result);
});

//Add product
router.post('/products', checkAuth, (req, res) => {
    products.push(req.body);
    res.json(products);
});

//Delete product
router.delete('/products/:id', checkAuth, (req, res) => {
  const newProducts = products.filter(item => item.id !== +req.params.id);
  res.json(newProducts);
})

//Edit product
router.put('/products/:id', checkAuth, (req, res) => {
  const newProducts = products.map(item => item.id === +req.params.id ? req.body : item);
  res.json(newProducts);
})

export default router;