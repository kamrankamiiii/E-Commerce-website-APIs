import express from "express"

 const cartRoute  = express.Router();


import { addToCart } from "../controllers/cartController.js";

cartRoute.post('/createCart' ,addToCart )



export {cartRoute}