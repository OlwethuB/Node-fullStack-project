// importing functions from the product model
const Product = require("../model/productModel");
const product = new Product();
// Get all products
exports.showProducts = (req, res) => {
  product.getProducts((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        status: res.statusCode,
        results,
      });
    }
  });
};

//  Get single product
exports.fetchProductId = (req, res) => {
  product.getProductId(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        status: res.statusCode,
        result,
      });
    }
  }); 
};

// create a new product
exports.createProduct = (req, res) => {
  const data = req.body;
  product.insertProduct(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        status: res.statusCode,
        msg: "Product has been added",
      });
    }
  });
};

// update product
exports.updateProduct = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  product.updateProductById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        status: res.statusCode,
        msg: "This product record has been updated",
      });
    }
  });
};

// delete product
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  product.deleteProductById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        status: res.statusCode,
        msg: "Product record deleted",
      });
    }
  });
};
