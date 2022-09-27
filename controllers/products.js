import data from "../data.js";
import { Product } from '../models/product.js'

async function index(req, res) {
    res.send(data.products);
}

export { index }