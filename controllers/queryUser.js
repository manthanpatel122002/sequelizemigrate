const db = require("../models");
User = db.User;

var queryUser = async (req, res) => {
  //create and insert only fields name data extra field will be ignored.
  // const data = await User.create({
  //     firstName: 'kkb',
  //     lastName: 'bhatt'
  //   }, { fields: ['firstName'] });

  //find only specefic attributes and rename using alias array.
  //   const data = await User.findAll({
  //     attributes: ['id' , 'firstName',]
  //     // [Sequelize.fn('COUNT', Sequelize.col('id')),'count']]
  //   });

  //find only include attributes and ignore all column named in exclude.
  //   const data = await User.findAll({
  //     attributes: {include:['id'],
  //                 exclude:['firstName']
  //             }
  //       });

  //ap.and = oprend and find id=8 AND firstName = kartik in database.
  // const data = await User.findAll({
  //     where: {
  //         [Op.or]: [
  //           { id: 4 },
  //           { firstName: 'rahul' }
  //         ]
  //       }
  //     });

  //group by id . and order will be descending.
  // const data = await User.findAll({
  //     order: [
  //         ['id', 'DESC']
  //     ],
  //     group: 'id'
  //     });

  //find data from 5th number row data to 5 next row data.
  const data = await User.findAll({
    offset: 5,
    limit: 5,
  });
  res.status(200).json({ data: data });
};

module.exports = { queryUser };
