const nodeFetch = require('node-fetch')
const Twitter = require("twit")
const {TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_TOKEN, TWITTER_TOKEN_SECRET} = require('../utils/constants')
module.exports = {
    uploadImage
}

const client = new Twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    access_token: TWITTER_TOKEN,
    access_token_secret: TWITTER_TOKEN_SECRET
  })

  
async function uploadImage (image, lon , lat) {
  try {
    if (!image) {
        throw new Error('* Forbidden. No image was provided.')
    }
    const [prefix, imageUrl] = image.split(';base64,')
    client.post("media/upload", {media: imageUrl}, async (error, media, response) => {
        if (error) {
            console.error('* Failed to upload to twitter', error)
        } else {

            client.post("statuses/update", lon, lat, (error, newTweet, response) => {
                if (error) {
                    console.error("* Failed to update status", error)
                } else {
                    return {
                        ...response,
                        tweet: newTweet
                    }
                }
            })
        }
    })
  } catch (err) {
    console.error(
      '* Error caught while fetching a recipe from the database',
      err
    )
  }
}
