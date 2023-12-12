import {product} from '../model/productSchema.js'

export const getAllProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.send({ 
        message: 'Git All Products From the Store' ,
        products: products
     });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const getSingleProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const singleProduct = await product.findById(id);
    if (!singleProduct) {
      return res.status(404).send({ message: "Product not found" });
    }
    res.send({
        message: 'Git Single Products From the Store' ,
        product: singleProduct,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const createSingleProducts = async (req, res) => {
  try {
    const newProduct = await product.create(req.body);
    res.send({
      message: "Product created successfully",
      products: newProduct,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
