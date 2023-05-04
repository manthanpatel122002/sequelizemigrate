const db = require("../models");
User = db.User;

var postUsers = async (req, res) => {
  var postData = req.body;
  if (postData.length > 1) {
    // console.log("Post data",postData)
    var data = await User.bulkCreate(postData);
  } else {
    // console.log("Post data",postData)
    var data = await User.create(postData);
  }

  res.status(200).json({ data: data });
};

module.exports = { postUsers };

