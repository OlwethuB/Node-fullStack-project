module.exports = (app) => {
  const bodyParser = require("body-parser");
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

  // import all model's objects
  const { users } = require("../model/users");

  // user's router
  router.get("/users", (req, res) => {
    users.fetchUsers(req, res);
  });

  router.get("/user/:id", (req, res) => {
    users.fetchUser(req, res);
  });

  router.post("/register", bodyParser.json(), (req, res) => {
    users.register(req, res);
  });

  router.put("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
  });

  router.patch("/user/:id", bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
  });

  router.delete("/user/:id", bodyParser.json(), (req, res) => {
    users.deleteUser(req, res);
  });
};
