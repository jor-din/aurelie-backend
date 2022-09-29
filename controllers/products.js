import data from "../data.js";
import { Product } from '../models/product.js'

async function index(req, res) {
    res.send(data.products);
}

async function productInfo(req, res) {
    const product = data.products.find((product)=> product.slug === req.params.slug)
    if (product) {
        res.send(product)
    }else {
        res.status(404).send({ message: 'Product Not Found'})
    }
}

export { index, productInfo }