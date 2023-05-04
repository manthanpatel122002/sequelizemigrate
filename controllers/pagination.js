const db = require("../models");
User = db.User;

var pagination = async (req, res) => {
  const { page, size } = req.query;
  console.log("page", page);
  console.log("size", size);
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  console.log("limit", limit);
  console.log("offset", offset);

  // const { limit, offset } = getPagination(page, size);

  const data = await User.findAndCountAll({ limit, offset });
  try {
    // console.log("data",data)
    res.status(200).json({ data: data });
  } catch {
    console.log("error");
  }
};

module.exports = { pagination };
