const db = require("../models");
User = db.User;

//   const data = await User.create({ firstName: "manthan", lastName: "patel" });
//   res.status(200).json({ data: data });

  const add_user = (data)=>{
    console.log(data)
    return User.create(data)
  }

module.exports = { add_user };
