var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
  answer: {type: String},
  details: {type: String},
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  _question: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
  likes: {type: Number},
}, {timestamps: true});


var Answer = mongoose.model('Answer', AnswerSchema);
