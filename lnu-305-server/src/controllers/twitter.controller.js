const TwitterService = require('../services/twitter.service')

module.exports = {
    uploadImage
}

async function uploadImage (req, res) {
  const response = await TwitterService.uploadImage(req.body.image, req.body.lat, req.body.lon,);
  res.status(200).send(response);
}
