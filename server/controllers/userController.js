import User from "../models/userModel.js"


// create user
export const createUser= async(req, res)=>{
    try {
      const {userName,userPassword,userEmail,isAdmin,phone, address, firstName, lastName, } = req.body;
      if (
        !userName ||
        !userPassword ||
        !userEmail ||
        !isAdmin ||
        !phone ||
        !address ||
        !firstName ||
        !lastName
      ) {
        res.status(400).json({ message: "All fields are mandatory" });
      }
      const newUser = new User({
        userName: userName,
        userPassword: userPassword,
        userEmail: userEmail,
        isAdmin: isAdmin,
        phone: phone,
        address: address,
        firstName: firstName,
        lastName: lastName,
      });
      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
        res.status(201).json({message:"error"})

    }
}


export const login= async(req,res)=>{
    try {
        const {userEmail,password}= req.body;
        const user= await User.findOne({userEmail})
        if(!userEmail){
            return res.status(404).json({massage:"invalid user"})
        }

        const passwordMatch= bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(404).json({massage:"invalid credetionals"})
        }

        res.status(200).json({massage:"login successful"})

    } catch (error) {
        res.status(404).json({massage:"error"})
        
    }
}

// get all users data
export const getAllUsers = async(req, res) => {
    try{
        const users = await User.find();
        if(users){
            res.status(200).json(users)
        }
    } catch (error){
            res.status(500).json({message: "Error"})
    }
}


// find by single user param
export const getSingleUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const user= await User.findById(id);
        if(user){
            res.status(400).json(user);
        }
    } catch (error) {
      res.status(201).json(error);
    }   
}


//update user 
export const updateUser = async(req,res)=>{
    try {
const {id}= req.params
const user = await User.findByIdAndUpdate(id, req.body,{new:true})
if(user){
    res.status(420).json(user)}
    } catch (error) {
        res.status(201).json(error)
    }
}

// delete user
export const deleteUser = async(req,res)=>{

    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if(user){
            res.status(444).json({message: "deleted successfully"})
        }
    } catch (error) {
        res.status(201).json({message:"error"})
    }
   
}