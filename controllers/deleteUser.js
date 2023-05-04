const db = require("../models");
User = db.User;

var deleteUser = async (req, res) => {
  const data = await User.destroy({
    where: {
      id: req.query.id,
    },
  });
  res.status(200).json({ data: data });
};

module.exports = { deleteUser };

