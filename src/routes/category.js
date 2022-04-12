import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.get('/categories', list); //Get all
router.get('/category/:slug', read); //Get products by category
router.post('/category', checkAuth, create); //Create category
router.patch('/categories/:slug/edit', checkAuth, update); //Update category
router.delete('/category/:id', checkAuth, remove); //Delete category

export default router;
