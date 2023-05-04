const { Op, Sequelize, QueryTypes } = require("sequelize");
const db = require("../models");
Emp = db.Emp;
Emp_info = db.Emp_Info;
con = db.Contact;
Grant = db.Grant;
Image = db.Image;
Video = db.Video;
Com = db.Comment;
Tag = db.Tag;
Tag_Taggable = db.Tag_Taggable;

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

module.exports = { get_data };

