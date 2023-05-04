const db = require("../models");
User = db.User;

var validateUser = async (req, res) => {
  var data = {};
  var messages = {};
  try {
    const data = await User.create({
      firstName: "kkb",
      lastName: "bhatt",
    });
  } catch (e) {
    console.log("sdfSC");
    // console.log(e.errors)
    let message;
    e.errors.forEach((error) => {
      switch (error.validatorKey) {
        case "isAlpha":
          message = "Only alphabetical value has been allowed";
          break;

        case "isLowercase":
          message = "only lowercase value can bee allowed";
      }
      messages[error.path] = message;
    });
  }
  res.status(200).json({ data: data, messages: messages });
};

module.exports = { validateUser };

