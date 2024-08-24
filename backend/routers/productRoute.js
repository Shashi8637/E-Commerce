import express from "express";
import { deleteAlLProduct, deleteProduct, getAllProduct, newProduct, updateProduct,getProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.post("/new",newProduct);
router.get("/getProduct/:id",getProduct);
router.get("/getAllProduct",getAllProduct);
router.put("/updateProduct/:id",updateProduct);
router.delete("/deleteProduct/:id",deleteProduct);
router.delete("/deleteAllProduct",deleteAlLProduct);

export default router;