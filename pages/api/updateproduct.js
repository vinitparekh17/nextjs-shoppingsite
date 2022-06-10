import Product from '../../models/Product';
import connectDb from '../../middleware/mongoose';

async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            let newProduct = await Product.findByIdAndUpdate( req.body._id, req.body )
            await newProduct.save()
            res.status(200).json({ success: true, newProduct })
        } catch (error) {
            res.status(400).json({error});
        }
    } else {
        res.status(400).json({ error: 'This mathod is not allowed!' })
    }
}

export default connectDb(handler)