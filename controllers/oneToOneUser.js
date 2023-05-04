const db = require("../models");
User = db.User;
con = db.Contact;

var oneToOneUser = async (req, res) => {
  //data inserted in User table
  // var data = await User.create({
  //     firstName:'rahul',
  //     lastName:'dhravid'
  // })

  // //data inserted in contact table using user_id (forigin_key)
  // if(data && data.id){
  //     await Contact.create({
  //         parmanentAddress:'rajgujaratkot',
  //         'currentAddress':'titans',
  //         'userId':data.id
  //     })
  // }

  //when we get first contact id then we use contact table name insted of user table. in all place and because of that all attributes and condition was change
  var data = await User.findAll({
    attributes: ["firstName", "lastName"],
    include: [
      {
        model: con,
        attributes: ["parmanentAddress", "currentAddress"],
      },
    ],
  });
  res.status(200).json({ data: data });
};

module.exports = { oneToOneUser };
