import Cart from '../models/cartModel.js'
import User from '../models/userModel.js'
import Product from '../models/productModel.js'

const createCart = async(req,res)=>{
    try {
        const {userId} = req.params;
        let user = await User.findById(userId)
        if(!user){}
    } catch (error) {
        
    }
}

const addToCart = async(req,res) => {
    try {
        const {userId,productId,quantity} = req.body;
        // Check if valid user Id
        const checkUser = await User.findById(userId);

        if(!checkUser){
            return res.status(403).json({
                status:"Fails",
                Error:"User does not exist Or Invalid User Id"
            })
        }

        // check if valid product id
        const checkProduct = await Product.findById(productId);

        if(!checkProduct){
            return res.status(404).json({
                status:"Fails",
                Error:"Invalid Product Id Or Product does not exist"
            })
        }

        // Check if cart with same userId and productId already added once

        const checkUserCart = await Cart.findOne({userId,productId})
        if(checkUserCart){
            checkUserCart.quantity += 1;
           const cart =  await checkUserCart.save()
           if(cart){ 
            return res.status(201).json({
                status:"success",
                cart
            })
        }
        }

        const cart = await Cart.create({
            userId,
            productId,
            quantity
        })

        if(cart){
            return res.status(201).json({
                status:"success",
                cart
            })
        }
    } catch (error) {
        res.status(400).json({Error:error.message});
    }
}


export{addToCart}