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
		Question.findOne({_id:req.params.id})
    .populate('_answers')
    .populate({ path: '_answers', populate: {path:'_user'} })
    // .populate({path: '_answers', populate: {path: 'answer'} })
    // .populate([
    //   {
    //     path: "_answers",
    //     model: "Answer",
    //
    //   populate: [
    //     {
    //       path: "_questions",
    //       model: "Question"
    //     },
    //     // {
    //     //   path:"_user",
    //     //   model: "User"
    //     // }
    //   ]
    //   }
    // ])

		.exec( function(err, data) {
      console.log('data from show in server controller',data);
			if(err) {
				res.status(500).send(err);
			} else {
        // console.log(data, 'data');
				res.json(data);
			}
		});
	},
	update: function(req, res) {
    // console.log('req.body',req.body);
		Question.findOne({_id:req.params.id}, function(err, question) {
			var answer = new Answer({answer:req.body.name, details:req.body.description, likes: 0});
      // answer.likes = 0;

			question._answers.push(answer);
      // console.log('*answer*', answer);
      // console.log('*question*', question);
      answer._question = question
      // console.log('*question*', question);
      User.findOne({_id:req.body._user}, function(err, user) {
        answer._user = user
  			answer.save( function(err) {
  				question.save( function(err)  {
  					if(err) {
  						res.status(500).send(err);
  					} else {
							user._answers.push(answer);
							user.save( function(err) {
								if(err) {
									res.status(500).send(err);
								} else {
                  // console.log('answer', question, answer);
									res.json(question);
								}
							});
              }
						});
  			//
				});
			}); // User.findOne

		}); //Questions.findONe
	},
  like: function(req, res) {
    Answer.findOne({_id:req.params.id}, function(err,answer) {
      var count = answer.likes;
      count++;
      answer.likes = count;
      console.log('answer in answer.js',answer);
      answer.save( function(err) {
        if(err) {
          res.status(500).send(err);
        } else {
          res.json(answer);
        }
      })
    })
    console.log('we made it to questions.js LIKES');
    // var count = 0;
  },
}//module ends here
