const db = require("../models");
User = db.User;

const { Op, Sequelize, QueryTypes } = require("sequelize");

var rawQueriesUser = async (req, res) => {
  // const users = await db.sequelize.query("SELECT * FROM `Users`",
  //  { type: QueryTypes.SELECT,
  //     model: User,
  //     mapToModel: true
  //  });

  const users = await db.sequelize.query(
    "SELECT * FROM Users WHERE lastName = ?",
    {
      replacements: ["bhatt"],
      type: QueryTypes.SELECT,
    }
  );

  res.status(200).json({ data: users });
};

module.exports = { rawQueriesUser };
