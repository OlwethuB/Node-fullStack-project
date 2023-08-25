// import connection
const db = require("../config/database");

class Products {
  // Get all products
  getProducts = (result) => {
    db.query("SELECT * FROM Products", (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };

  // Get single product
  getProductId = (id, result) => {
    db.query(
      "SELECT * FROM Products WHERE prodID = ?",
      [id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results[0]);
        }
      }
    );
  };

  // insert product into database
  insertProduct = (data, result) => {
    db.query(
      "INSERT INTO Products SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };

  // update product to database
  updateProductById = (data, id, result) => {
    db.query(
      "UPDATE Products SET prodName = ?, amount = ?, category = ?, prodUrl = ? WHERE prodID = ? ",
      [data.prodName, data.amount, data.category, data.prodUrl, id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };

  // delete a product from database
  deleteProductById = (id, result) => {
    db.query("DELETE FROM Products WHERE prodID = ?", [id], (err, results) => {
      if (err) {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    });
  };
}

module.exports = Products;
