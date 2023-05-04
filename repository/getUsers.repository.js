const db = require("../models");
User = db.User;

const get_users = () => {
   return User.findAll();
 };

var get_user = (id) => {
      return User.findOne({
        where: {
          id: id.id
        },
      });
    };
 


module.exports = { get_users,get_user };
