import data from "../data.js";

async function index(req, res) {
    res.send(data.products);
}

async function showProduct(req, res) {
    const product = data.products.find(x => x.slug === req.params.slug);
  if (product) {
    console.log(product)
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
}

export { index, showProduct }