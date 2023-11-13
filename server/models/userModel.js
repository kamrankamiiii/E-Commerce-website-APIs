import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String },
  userPassword: { type: String, Number, required: true },
  userEmail: {  type: String,
    // unique: true,
    // required: true,
  },
  isAdmin: {
    type: String,
  },

  // profilePicture: {
  //   type: String,
  //   required:true
  // },

  phone: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
});

const schema = mongoose.model('User' , userSchema)
export default schema
