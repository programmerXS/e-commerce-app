import express from "express";
import shopControllers from "../controllers/shopControllers.js";

const shopRoutes = express.Router();

shopRoutes.get("/clothes", shopControllers.getClothes);

shopRoutes.get("/jewellery", shopControllers.getJewellery);

shopRoutes.get("/electronics", shopControllers.getElectronics);

shopRoutes.post("/purchase-products", shopControllers.postPurchaseProducts);

shopRoutes.get("/purchased-products", shopControllers.getPurchasedProducts);

export default shopRoutes;
