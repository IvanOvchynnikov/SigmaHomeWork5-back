import mongoose from "mongoose";

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
    },
    discount: {
        type: Boolean,
        required: true
    }
})
export default mongoose.model('Product',Product);