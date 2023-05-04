const db = require("../models");
const get_user = require("../repository/getUsers.repository").get_user;

User = db.User;

var getUser = async (req, res) => {
  id=req.params.id
  const data = await get_user({id});
  res.status(200).json({ data: data });
};

module.exports = { getUser };