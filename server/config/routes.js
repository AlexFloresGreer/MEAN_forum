console.log('routes.js connected');
var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
// var answers = require('../controllers/answers.js');

module.exports = function(app){
  app.get('/users', users.create);
  app.post('/users', users.create);
  // app.get('/users/:id', users.show);

  app.post('/questions', questions.create);
  app.get('/questions', questions.index);
  app.get('/questions/:id', questions.show);
  app.put('/questions/:id', questions.update);
  // app.post('/questions/:id/new_answer', answers.create);
  app.post('/like/:id', questions.like); //in question.js controller
  // app.put('/answers/:id', messages.update);

};
