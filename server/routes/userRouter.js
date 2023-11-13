import express from "express"

const UserRouter = express.Router();

import {createUser,getAllUsers ,getSingleUser, updateUser, deleteUser} from "../controllers/userController.js"

// USER APIs
UserRouter.post('/user' , createUser) 
UserRouter.get('/user' ,getAllUsers) 
UserRouter.get('/user/:id' ,getSingleUser )
UserRouter.put('/user/:id' ,updateUser)
UserRouter.delete('/user/:id',deleteUser)




export {UserRouter};
