import mongoose from "mongoose";

const Order = new mongoose.Schema({
   fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String
    },
    order:[
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity:{
                type:Number,
                required: true
            }
        }
    ],
})
export default mongoose.model('Order',Order);