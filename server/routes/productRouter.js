import express from "express"

const productRoute  = express.Router();

import {createProduct,listAllProduct,updateSingleProduct,getSingleProduct,deleteProduct} from "../controllers/productControllers.js"


productRoute.post('/newProduct' ,createProduct ) // create product 
productRoute.get('/products',listAllProduct)
productRoute.put('/updateProduct/:id',updateSingleProduct)
productRoute.get('/singleProduct', getSingleProduct)
productRoute.delete('/deleteProduct' ,deleteProduct )


export {productRoute}
