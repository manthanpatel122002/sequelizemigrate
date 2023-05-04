const db = require("../models");
Image = db.Image;
Video = db.Video;
Com = db.Comment;
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

module.exports = { polyOneToManyUser };
