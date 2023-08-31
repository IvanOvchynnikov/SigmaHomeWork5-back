import {Router} from "express";
import Order from "../models/Order.js";

const routerOrders=new Router();

routerOrders.post('/',async(req,res)=>{
    try {
        const order = await Order.create({...req.body});
        res.status(200).json(order)
    } catch (err) {
        res.status(500).json({
            message: "Unable to create order"
        })
        console.log(err)
    }
})

routerOrders.get('/', async (req, res) => {
    try {
        const products = await Order.find().populate('order.product');
        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: "Unable to get orders"
        })
        console.log(err)
    }
})
routerOrders.delete('/:id', async (req, res) => {
    try {
        const del = await Order.findOneAndDelete({_id: req.params.id})
    } catch (err) {
        res.status(500).json({
            message: "Unable to delete order"
        })
        console.log(err)
    }
})

export default routerOrders;
