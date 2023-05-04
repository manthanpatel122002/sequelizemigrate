const db = require("../models");
const add_user = require("../repository/addUser.repository").add_user;

User = db.User;

var addUser = async (req, res) => {
  const data = await add_user({ firstName: "vivek", lastName: "jalondra" });
  res.status(200).json({ data: data });
};




module.exports = { addUser };
