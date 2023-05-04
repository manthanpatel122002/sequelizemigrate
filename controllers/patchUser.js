const db = require("../models");
User = db.User;

var patchUser = async (req, res) => {
  updatedData = req.body;
  console.log("updatedData", updatedData);
  const data = await User.update(updatedData, {
    where: {
      id: req.query.id,
    },
  });
  res.status(200).json({ data: data });
};

module.exports = { patchUser };
