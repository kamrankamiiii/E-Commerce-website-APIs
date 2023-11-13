import Product from '../models/productModel.js'



// create product 
export const createProduct = async(req,res)=>{
    try {
      const {
        productTitle,
        productDescription,
        productPrice,
        productCategory,
        productProductPicUrl, } = req.body;
      if (
        !productTitle ||
        !productDescription ||
        !productPrice ||
        !productCategory ||
        !productProductPicUrl ) {
        res.status(400).json({ message: "all fields are mandatory" });
      }
      const newProduct = new Product({
        productTitle: productTitle,
        productDescription: productDescription,
        productPrice: productPrice,
        productCategory: productCategory,
        productProductPicUrl: productProductPicUrl,
      });
      await newProduct.save();
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(201).json({ message: "error" });
    }
}

// list  all users
export const listAllProduct = async(req, res) => {
  try{
      const products = await Product.find();
      if(products){
          res.status(200).json(products)
      }
  } catch (error){
          res.status(500).json({message: "Error"})
  }
}

// 3.	update Single Product
export const updateSingleProduct = async(req,res)=>{
  try {
const{id}= req.params;
const product = await Product.findByIdAndUpdate(id, req.body ,{new:true})
if(product){
  res.status(400).json(product)
}

} catch (error) {
  res.status(201).json({ message: "error" });
}
}

// 4. get single id
export const getSingleProduct = async(req,res)=>{
  try {
      const {id} = req.params;
      const product= await Product.findById(id);
      if(product){
          res.status(400).json(product);
      }
  } catch (error) {
    res.status(201).json(error);
  }   
}


// delete product
export const deleteProduct = async(req,res)=>{

  try {
      const {id} = req.params
      const product = await Product.findByIdAndDelete(id)
      if(product){
          res.status(444).json({message: "deleted successfully"})
      }
  } catch (error) {
      res.status(201).json({message:"error"})
  }
 
}