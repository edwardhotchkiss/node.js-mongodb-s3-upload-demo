
/*!
  S3
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , S3

var S3Schema = new Schema({
  id          : ObjectId ,
  hash        : String,
  url 		  : String,
  title       : String,
  description : String,
  created_at  : { type : Date, default: Date.now }
});

module.exports = S3 = mongoose.model('S3', S3Schema);

/* EOF */