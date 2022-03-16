import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.get('/categories', list);
router.get('/category/:slug', read);
router.post('/category', checkAuth, create);
router.put('/category/:slug', checkAuth, update);
router.delete('/category/:id', checkAuth, remove);

export default router;
