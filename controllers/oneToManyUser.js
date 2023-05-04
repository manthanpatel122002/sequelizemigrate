const db = require("../models");
User = db.User;
con = db.Contact;

var oneToManyUser = async (req, res) => {
  // const data = await User.bulkCreate([
  //     {
  //         firstName: 'chair',
  //         lastName: 'hansen',
  //         Contacts: {
  //             parmanentAddress: 'gokuldham',
  //             currentAddress: 'gelexy',
  //         }
  //     },
  //     {
  //         firstName: 'gg',
  //         lastName: 'hangfgsen',
  //         Contacts: {
  //             parmanentAddress: 'gggd',
  //             currentAddress: 'geldddddddexy',
  //         }
  //     }
  // ],

  //     {
  //         include: [db.Contact]
  //     })
  // console.log(User)

  // var data1 = await User.findAll({
  //   attributes: ["firstName", "lastName"],
  //   include: [
  //     {
  //       model: con, // Eager Loading
  //       attributes: ["parmanentAddress", "currentAddress"],
  //     },
  //   ],
  // })

  const data = await User.findAll({
    where: { id: [1] },
  });
  console.log("data", data);
  const data1 = await con.destroy({
    where: {
      userId: {
        [Op.in]: data.map((x) => x.id),
      },
    },
  });
  // for (const da of data) {
  await User.bulkCreate(
    [
      {
        firstName: "test",
        lastName: "test1",
      },
      {
        firstName: "test111",
        lastName: "test1111",
      },
    ],
    {
      include: [con],
    }
  );
  // }
  // console.log("data1",data1)
  // for (const da of data) {
  //   await con.bulkCreate(
  //     UserId.map((x) => ({
  //       userId: da.id,
  //     }))
  //   );
  // }
  //article = user
  //tags = contact

  // let coning = [
  //   con.findOrCreate({ where: { id: 1 } }),
  // ];

  // Promise.all(coning).then((usercons) => {
  //   User.create({
  //     firstName: "vijay",
  //     lastName: "rathod",
  //   }).then((articleInstance) => {
  //     articleInstance.setContacts(usercons.map((usercon) => usercon[0]));
  //   });
  // });

  // var contactdata = await data.getContacts();  Lazy loading

  res.status(200).json({ data: data });
};

module.exports = { oneToManyUser };

