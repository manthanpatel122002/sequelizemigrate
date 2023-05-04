const db = require("../models");
User = db.User;

var sorting = async (req, res) => {
  const { orderBy, orderType } = req.query;
  console.log("orderBy", orderBy);
  console.log("orderType", orderType);
  console;
  const data = await User.findAll({
    order: [[`${orderBy}`, `${orderType}`]],
  });
  res.status(200).json({ data: data });
};

module.exports = { sorting };

