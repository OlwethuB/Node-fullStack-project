const db = require("../config/database");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware");

class Users {
  fetchUsers(req, res) {
    const query = ` SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile FROM Users`;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchUser(req, res) {
    const query = ` SELECT userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass, UserProfile FROM Users WHERE userID = ${req.params.id} `;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

  login(req, res) {}
  async register(req, res) {
    const data = req.body;
    // Encrypt password
    data.userPass;
    // Payload
    const user = {
      emailAdd: data.emailAdd,
      userPass: data.userPass,
    };
    // Query
    const query = ` INSERT INTO User SET ?;`;
    db.query(query, [data], (err) => {
      if (err) throw err;
      // create token
      let token = createToken(user);
      res.cookie("legitUser", token, {
        maxAge: 3000,
        httpOnly: true,
      });
      res.json({
        status: statusCode,
        msg: "You are now Registered",
      });
    });
  }

  updateUser(req, res) {
    const query = ` UPDATE Users SET ? WHERE userID = ?`;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "This user record has been updated",
      });
    });
  }

  deleteUser(req, res) {
    const query = ` DELETE FROM Users WHERE userID = ${req.params.id};`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "User record deleted",
      });
    });
  }
}

module.exports = Users;
