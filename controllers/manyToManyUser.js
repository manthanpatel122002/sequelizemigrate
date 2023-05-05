const db = require("../models");
User = db.User;
con = db.Contact;
Grant = db.Grant;

var manyToManyUser = async (req, res) => {
  const data = await User.bulkCreate(
    [
      {
        firstName: "vijay",
        lastName: "rathod",

        Contacts: [
          {
            //database table name
            parmanentAddress: "rajkot",
            currentAddress: "kalupur",
            userId: 10,
            Grant: {
              selfGranted: true,
            },
          },
        ],
      },
      {
        firstName: "sumit",
        lastName: "bhardwaj",

        Contacts: [
          {
            //database table name
            parmanentAddress: "up",
            currentAddress: "mp",
            userId: 9,
            Grant: {
              selfGranted: true,
            },
          },
        ],
      },
    ],
    {
      include: [con],
    }
  );

  // console.log(data.dataValues.id)
  // many-to-many reletionship occuring to (contact-user)
  // var data = await Contact.findAll({
  //     attributes: ['parmanentAddress', 'currentAddress'],
  //     include: [{
  //         model: User,
  //         attributes: ['firstName', 'lastName']
  //     }]
  // })

  //many-to-many reletionship occuring to (user-contact)
  // var data1 = await User.findAll({
  //     attributes:['firstName','lastName'],
  //     include:[{
  //         model:con,
  //         attributes:['parmanentAddress','currentAddress']
  //     }]
  // })

  res.status(200).json({ data: data });
};

module.exports = { manyToManyUser };
