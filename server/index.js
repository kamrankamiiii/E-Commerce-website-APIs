import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv"
const app = express();
dotenv.config();
app.use(bodyParser.json());



//  import cartRoute from "./routes/cartRouter.js"
import { UserRouter } from "./routes/userRouter.js";
import { productRoute } from "./routes/productRouter.js";
import { cartRoute } from "./routes/cartRouter.js";




app.use("/api", UserRouter);
app.use("/api", productRoute );
app.use('/api', cartRoute)


mongoose.connect(process.env.MONGO)
mongoose.connection.on("connected", () => {
  console.log("database connected");
});


const port = process.env.port || 6000
app.listen(port, ()=>{ 
   console.log(`server is running at ${port}`)
})