const Users = require("./users");
const Products = require("./productModel");
// Export all objects
module.exports = {
  users: new Users(),
  products: new Products(),
};
