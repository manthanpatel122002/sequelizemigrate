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
// User = db.User;
Emp = db.Emp;
Emp_info = db.Emp_Info;
// con = db.Contact;
// Grant = db.Grant;
// Image = db.Image;
// Video = db.Video;
// Com = db.Comment;
// Tag = db.Tag;
// Tag_Taggable = db.Tag_Taggable;





