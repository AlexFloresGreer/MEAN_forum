var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 10},
  description: {type: String, required: true},
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  _answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});


var Question = mongoose.model('Question', QuestionSchema);
