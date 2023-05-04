const db = require("../models");
User = db.User;

var getSetVirtualUser = async (req, res) => {
  const data = await User.findAll({
    where: {
      lastName: "patel,indian",
    },
  });

  // const data = await User.create({
  //         firstName:'bhavin',
  //         lastName:'sisodiya'
  // });
  res.status(200).json({ data: data });
};

module.exports = { getSetVirtualUser };

