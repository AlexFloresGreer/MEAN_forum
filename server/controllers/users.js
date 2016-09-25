console.log('server-side users.js controller connected');

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

  create: function(req, res) {
		var usr = new User(req.body);
		usr.save(function(err, data) {
			if(err) {
				res.json(err);
			} else {
				res.json(data);
			}
		});
	},
} //end of module exports
