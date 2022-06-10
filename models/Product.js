const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },

    size: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
}, { timestamps: true })

mongoose.models = {}

export default mongoose.model('Products', productSchema)