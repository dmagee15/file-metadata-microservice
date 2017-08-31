var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var template = new Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('template', template);