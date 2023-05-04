const { Op, Sequelize, QueryTypes } = require("sequelize");
const db = require("../models");
User = db.User;


var searching = async (req, res) => {
  const where = {};

  let { value } = req.query;
  let { multi } = req.query;
  console.log(multi);

  console.log(value);
  let firstName = value.split(" ")[0];
  let lastName = value.split(" ")[1];

  if (firstName) where.firstName = { [Op.like]: `%${firstName.trim()}%` };
  if (lastName) where.lastName = { [Op.like]: `%${lastName.trim()}%` };
  console.log("firstName , lastName", firstName, lastName);

  if (multi == "or") {
    const data = await User.findAll({
      where: {
        [Op.or]: where,
      },
    });
    res.status(200).json({ data: data });
  } else {
    const data = await User.findAll({
      where: {
        [Op.and]: where,
      },
    });
    res.status(200).json({ data: data });
  }
};

module.exports = { searching };

