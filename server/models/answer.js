var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
  answer: {type: String, required:true, minlength: 5 },
  details: {type: String, required:true},
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  likes: {type: Number},
}, {timestamps: true});


var Answer = mongoose.model('Answer', AnswerSchema);
