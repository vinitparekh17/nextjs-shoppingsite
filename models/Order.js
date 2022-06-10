const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    products: [
        {
            productId: String,
            quantity: {
                type: Number,
                default: 1
            },
        }
    ],
    address: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Panding',
        required: true
    }
}, { timestamps: true })

export default model('Orders', OrderSchema)