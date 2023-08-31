import express from 'express'
import mongoose from 'mongoose'
import Product from "./models/Product.js";
import router from "./routes/ProductRoutes.js";

import fileUpload from 'express-fileupload'
import cors from 'cors'
import routerOrders from "./routes/OrderRoutes.js";

const PORT=5001;
const DB_URL=`mongodb+srv://user:user@cluster0.vrafwcf.mongodb.net/?retryWrites=true&w=majority`;

const app=express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use('/products',router);
app.use('/orders',routerOrders);
app.use(express.static('assets'));


async function startApp(){
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT,()=>{
            console.log("OK")
        })
    }catch (e){
        console.log(e);
    }
}

await startApp();