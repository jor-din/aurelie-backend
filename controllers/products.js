import data from "../data.js";
import { Product } from '../models/product.js'
import { User } from '../models/user.js'

async function index(req, res) {
  const products = await Product.find()
  res.send(products);
}

async function showProduct(req, res) {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).json({ err: 'Not found' })
  }
}

async function findProduct (req, res) {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product)
  }
  else {
    res.status(404).json({ err: 'Not found' })
  }
}

async function createdProduct (req, res) {
  await Product.remove({})
  const createdProducts = await Product.insertMany(data.products)
  const createdUsers = await User.insertMany(data.users)
  res.send({ createdProducts, createdUsers })
}

export { index, showProduct, findProduct, createdProduct };
