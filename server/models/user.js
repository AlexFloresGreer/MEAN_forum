var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstname: {type: String, required: [true, "name required"],trim: true, minlength: [2, "name is too short"], unique: true, validate: {validator: function(firstname) {
				return /^[a-z]+$/i.test(firstname);
			},
			message: "invalid name"
		}
  },
  _questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
  _answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}],
}, {timestamps:true});

var User = mongoose.model('User', UserSchema);
