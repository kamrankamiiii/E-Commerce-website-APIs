import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  productTitle: { type: String, unique: true, required: true },
  productDescription: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productCategory: { type: String, require: true },
  productProductPicUrl: { type: String },
});

const schema = mongoose.model('Product' , productSchema)
export default schema