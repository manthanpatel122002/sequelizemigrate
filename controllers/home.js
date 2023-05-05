/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all Employee by Email
 *     description: Get all Employee by Email
 *     responses:
 *       200:
 *         description: Success
 *
 */

var home = async (req, res) => {
  res.send("hello world");
  //   res.status(200).json({data:data})
};

module.exports = { home };
