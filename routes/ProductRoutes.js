import {Router} from "express";
import Product from "../models/Product.js";
import fileService from '../services/fileService.js'

const router=new Router();

router.post('/',async(req,res)=>{
    try {
        const fileName=fileService.saveFile(req.files.imageUrl);
        const product = await Product.create({...req.body,imageUrl:fileName});
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({
            message: "Unable to create product"
        })
        console.log(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: "Unable to get products"
        })
        console.log(err)
    }
})
export default router;
