import Product from '../../models/Product';
import connectDb from '../../middleware/mongoose';

async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const { title, slug, desc, img, catagory, size, color, price, stock } = req.body
            let newProduct = new Product({
                title, slug, desc, img, catagory, size, color, price, stock
            })
            await newProduct.save()
            res.status(200).json({ success: true })
        } catch (error) {
            res.send(error);
        }
    } else {
        res.status(400).json({ error: 'This mathod is not allowed!' })
    }
}

export default connectDb(handler)