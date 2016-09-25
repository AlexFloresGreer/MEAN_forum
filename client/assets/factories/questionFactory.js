app.factory('questionFactory',  ['$http', function($http) {

  return {
  getQuestion : function(questionId, callback) {
    $http.get(`/questions/${questionId}`).then( function(returned_data){
      if (typeof(callback) === 'function') {
        callback(returned_data.data);
      }
    });
  },
  showQuestions : function(questionId, callback) {
    $http.get(`/questions/${questionId}`).then( function(returned_data){
      if (typeof(callback) === 'function') {
        callback(returned_data.data);
      }
    });
  },
  getQuestions : function(callback) {
    $http.get('/questions').then( function(returned_data){
      if (typeof(callback) === 'function') {
        callback(returned_data.data);
      }
    });
  },
  getAnswers : function(callback) {
    $http.get('/answers').then( function(returned_data){
      if (typeof(callback) === 'function') {
        callback(returned_data.data);
      }
    });
  },
  addQuestion : function(newQuestion, callback) {
    $http.post('/questions', newQuestion).then( function(returned_data){
      if (typeof(callback) === 'function') {
        callback(returned_data.data);
      }
    });
  },
  addAnswer: function(questionId, newAnswer, callback) {
    $http.put(`/questions/${questionId}`, newAnswer).then( function(returned_data){
      if (typeof(callback) === 'function') {
        callback(returned_data.data);
      }
    });
  },
  addLike: function(answerId, callback) {
    $http.post('/like/'+answerId+'/').success(function(data) {
      callback();
    })
  }
}

}]);
