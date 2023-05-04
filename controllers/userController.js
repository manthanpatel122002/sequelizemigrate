const { Op, Sequelize, QueryTypes } = require("sequelize");
const db = require("../models");
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
const ejs = require("ejs");
app.set("view engine", "ejs");

const comment = require("../models/comment");
const tag = require("../models/tag");
// const address = require("../models/address");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
User = db.User;
Emp = db.Emp;
Emp_info = db.Emp_Info;
con = db.Contact;
Grant = db.Grant;
Image = db.Image;
Video = db.Video;
Com = db.Comment;
Tag = db.Tag;
Tag_Taggable = db.Tag_Taggable;

var home = async (req, res) => {
  res.send("hello world");
  // res.status(200).json({data:data})
};

var addUser = async (req, res) => {
  const data = await User.create({ firstName: "manthan", lastName: "patel" });
  // const jane = User.build({ firstName: "Jane", lastName:"singh" });
  // await jane.save();
  res.status(200).json({ data: data });
};

var getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data: data });
};

var getUser = async (req, res) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

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

var deleteUser = async (req, res) => {
  const data = await User.destroy({
    where: {
      id: req.query.id,
    },
  });
  res.status(200).json({ data: data });
};

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

var rawQueriesUser = async (req, res) => {
  // const users = await db.sequelize.query("SELECT * FROM `Users`",
  //  { type: QueryTypes.SELECT,
  //     model: User,
  //     mapToModel: true
  //  });

  const users = await db.sequelize.query(
    "SELECT * FROM Users WHERE lastName = ?",
    {
      replacements: ["bhatt"],
      type: QueryTypes.SELECT,
    }
  );

  res.status(200).json({ data: users });
};

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

var searching = async (req, res) => {
  const where = {};

  let { value } = req.query;
  let { multi } = req.query;
  console.log(multi);

  console.log(value);
  let firstName = value.split(" ")[0];
  let lastName = value.split(" ")[1];

  if (firstName) where.firstName = { [Op.like]: `%${firstName.trim()}%` };
  if (lastName) where.lastName = { [Op.like]: `%${lastName.trim()}%` };
  console.log("firstName , lastName", firstName, lastName);

  if (multi == "or") {
    const data = await User.findAll({
      where: {
        [Op.or]: where,
      },
    });
    res.status(200).json({ data: data });
  } else {
    const data = await User.findAll({
      where: {
        [Op.and]: where,
      },
    });
    res.status(200).json({ data: data });
  }
};

var sorting = async (req, res) => {
  const { orderBy, orderType } = req.query;
  console.log("orderBy", orderBy);
  console.log("orderType", orderType);
  console;
  const data = await User.findAll({
    order: [[`${orderBy}`, `${orderType}`]],
  });
  res.status(200).json({ data: data });
};

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

var oneToManyUser = async (req, res) => {
  const data = await User.bulkCreate([
      {
          firstName: 'chair',
          lastName: 'hansen',
          Contacts: {
              parmanentAddress: 'gokuldham',
              currentAddress: 'gelexy',
          }
      },
      {
          firstName: 'gg',
          lastName: 'hangfgsen',
          Contacts: {
              parmanentAddress: 'gggd',
              currentAddress: 'geldddddddexy',
          }
      }
  ],

      {
          include: [db.Contact]
      })
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

  // const data = await User.findAll({
  //   where: { id: [1] },
  // });
  // console.log("data",data)
  // const data1 =await con.destroy({
  //   where: {
  //     userId: {
  //       [Op.in]: data.map((x) => x.id),
  //     },
  //   },
  // });
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

  let coning = [
    con.findOrCreate({ where: { id: 1 } }),
  ];

  Promise.all(coning).then((usercons) => {
    User.create({
      firstName: "vijay",
      lastName: "rathod",
    }).then((articleInstance) => {
      articleInstance.setContacts(usercons.map((usercon) => usercon[0]));
    });
  });

  // var contactdata = await data.getContacts();  Lazy loading

  // res.status(200).json({ data: data2 });
};

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
            userId: 2,
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
            userId: 1,
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

var polyOneToManyUser = async (req, res) => {
  // var imageData = await Image.create({
  //     title:"first Image",
  //     url:"first Url"
  // })
  // var videoData = await Video.create({
  //     title:"first video",
  //     text:"awsome"
  // })
  // if(imageData.id && videoData.id){
  //     await Comment.create({
  //         title:"fisrt comment for image",
  //         commentableId:imageData.id,
  //         commentableType:'image'
  //     });
  //     await Comment.create({
  //         title:"fisrt comment for video",
  //         commentableId:videoData.id,
  //         commentableType:'video'
  //     });
  // }

  // var imageData = await Image.findAll({
  //     include:[{
  //         model:Comment
  //     }]
  // })

  // var videoData = await Video.findAll({
  //     include:[{
  //         model:Comment
  //     }]
  // })

  // var data = await Video.create({
  //     title:"bhavin Video",
  //     url: 'https://picsum.photos/200/8000/other',
  //     Comments: {
  //         title: "manthan 1" ,
  //         commentableId: 'data.id'
  //     }
  // }, {
  //     include: [{ model: Comment }]
  // })

  // console.log(data)

  res.status(200).json({ data: data });
};

var polyManyToManyUser = async (req, res) => {
  data = {};

  // var imageData = await Image.create({
  //     title:"last Image",
  //     url:"last Url"
  // })

  // var videoData = await Video.create({
  //     title:"last video",
  //     text:"last"
  // })

  // var tagData = await Tag.create({
  //     name:'lastjs'
  // })

  // if(tagData && tagData.id && imageData && imageData.id){
  //     await Tag_Taggable.create({
  //         tagId:tagData.id,
  //         taggableId:imageData.id,
  //         taggableType:'image'
  //     });
  // }
  // if(tagData && tagData.id && videoData && videoData.id){
  //     await Tag_Taggable.create({
  //         tagId:tagData.id,
  //         taggableId:videoData.id,
  //         taggableType:'video'
  //     });
  // }

  // var data = await Image.findAll({
  //     include:[Tag]
  // })

  // var data1 = await Video.findAll({
  //     include:[Tag]
  // })

  // var data2 = await Tag.findAll({
  //     include:[Image,Video]
  // })

  res.status(200).json({ data: data2 });
};

var multipleTableDelete = async(req,res)=>{
  // const data = await User.create(
  //     {
  //         firstName: 'chavgfdzgvdzgfdzgdzfdzir',
  //         lastName: 'hanxczzfvdzfbgdzsen',
  //         Contacts: {
  //             parmanentAddress: 'gokulzbvbdzbvgdzffdham',
  //             currentAddress: 'gelzbvcvzbczbexy',
  //         }
  //     },
  //     {
  //         include: [db.Contact]
  //     })

  const data = await User.destroy({
    where: {
      id: 1,
    },
  });
  res.status(200).json({ data: data });
  
    }

var data = async (req, res) => {
  res.render("index");
};
var get_data = async (req, res) => {
  //Pagination
  const start = req.query.start;
  console.log("start", start);
  const length = req.query.length;
  console.log("length", length);

  //Searching
  const search = req.query.search;
  console.log("search", search);
  const searchValue = search.value;

  //Sorting
  const order = req.query.order;
  if (order) {
    var column = order[0].column;
    console.log("column", column);
    var dir = order[0].dir;
    console.log("dir", dir);
    var colName = req.query.columns[column].data;
    console.log("colName", colName);
    var orderBy = [[colName, dir]];
  } else {
    var orderBy = ["id"];
  }

  switch (true) {
    case column == 7:
      var orderBy = [Emp_info, "empId", dir];
      break;
    case column == 8:
      var orderBy = [Emp_info, "currentAddress", dir];
      break;
    case column == 9:
      var orderBy = [Emp_info, "parmanentAddress", dir];
      break;
  }

  console.log("orderBy", orderBy);
  const recordsTotal = await Emp.count();
  const recordsFiltered = recordsTotal;

  const data = await Emp.findAll({
    include: [
      {
        model: Emp_info,
        attributes: ["empId", "currentAddress", "parmanentAddress"],
      },
    ],
    offset: parseInt(start),
    limit: parseInt(length),
    subQuery: false,
    order: [orderBy],
    where: {
      [Op.or]: {
        firstName: { [Op.like]: `%${searchValue}%` },
        lastName: { [Op.like]: `%${searchValue}%` },
        "$Emp_Infos.currentAddress$": { [Op.like]: `%${searchValue}%` },
      },
    },
  });
  res.json({
    offset: parseInt(start),
    limit: parseInt(length),
    data: data,
    recordsTotal: recordsTotal,
    recordsFiltered: recordsFiltered,
  });
};
module.exports = {
  home,
  addUser,
  getUsers,
  getUser,
  postUsers,
  deleteUser,
  patchUser,
  queryUser,
  getSetVirtualUser,
  validateUser,
  rawQueriesUser,
  pagination,
  searching,
  sorting,
  oneToOneUser,
  oneToManyUser,
  manyToManyUser,
  polyOneToManyUser,
  polyManyToManyUser,
  multipleTableDelete,
  data,
  get_data,
};
