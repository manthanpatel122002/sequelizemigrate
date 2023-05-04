const db = require("../models");
const get_users = require("../repository/getUsers.repository").get_users;
User = db.User;

var getUsers = async (req, res) => {
  const data = await get_users({});
  res.status(200).json({ data: data });
};

module.exports ={getUsers}
