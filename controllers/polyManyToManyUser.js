const db = require("../models");
Image = db.Image;
Video = db.Video;
Com = db.Comment;
Tag = db.Tag;
Tag_Taggable = db.Tag_Taggable;


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

  res.status(200).json({ data: data });
};

module.exports = { polyManyToManyUser };
