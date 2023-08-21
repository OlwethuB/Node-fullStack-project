
module.exports = (app) => {
  const product = require("../controller/product.js");

  // init express router
  var router = require("express").Router();

  // Get all products
  router.get("/products", product.showProducts);
  // Get single product
  router.get("/product/:id", product.getProductId);
  // Create new product
  router.post("/products", product.createProduct);
  // Update a product
  router.put("/products/:id", product.updateProduct);
  // Delete a product
  router.delete("/products/:id", product.deleteProduct);

};
