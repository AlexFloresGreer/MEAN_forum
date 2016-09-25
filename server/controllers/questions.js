var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
var User = mongoose.model('User')

module.exports = {

  index: function(req,res) {
    Question.find().populate('_user').exec( function(err, data) {
      if(err){
        res.status(500).send(err);
      } else {
        res.json(data);
      }
    });
  },
  create: function(req, res) {
		User.findOne({_id: req.body._user}, function(err, user){
			var qst = new Question(req.body);
			user._questions.push(qst);
			qst.save(function(err, data) {
				if(err) {
					res.status(500).send(err);
				} else {
					user.save(function(err, data){
						if(err) {
							res.status(500).send(err);
						} else {
							res.json(data);
						}
					});
				}
			});
		});
	},
	show: function(req, res) {
    console.log('show?');
		Question.findOne({_id:req.params.id})
		.populate([
			{
				path: "_user",
				model: "User",
        populate: [
          {
            path: "_answers",
    				model: "Answer",
            populate: [
            {
              path: "_user",
              model: "User"
            },
          ]
          }
        ]



			}])
		.exec( function(err, data) {
			if(err) {
				res.status(500).send(err);
			} else {
        // console.log(data, 'data');
				res.json(data);
			}
		});
	},
	update: function(req, res) {
		Question.findOne({_id:req.params.id}, function(err, question) {
			var answer = new Answer(req.body);
      answer.likes = 0;
			question._answers.push(answer);
			answer.save( function(err) {
				question.save( function(err)  {
					if(err) {
						res.status(500).send(err);
					} else {
						User.findOne({_id:answer._user}, function(err, user) {
							user._answers.push(answer);
							user.save( function(err) {
								if(err) {
									res.status(500).send(err);
								} else {
                  console.log('answer', question, answer);
									res.json(question);
								}
							});
						});
					}
				});
			});
		});
	}
}//module ends here
