app.controller('questionController', ['$scope', 'questionFactory', 'userFactory', '$location', '$routeParams', '$cookies', function($scope, questionFactory, userFactory, $location, $routeParams, $cookies) {

console.log('question controller working!');

var index = function() {
    $scope.currentUser = $cookies.getObject('user');
    questionFactory.getQuestions( function( questions ) {
      $scope.questions = questions;

      });
    }
    $scope.addAnswer = function () {
    	$scope.newAnswer._user = $scope.currentUser._id;
    	questionFactory.addAnswer($routeParams.id, $scope.newAnswer, function(answer) {
        	$scope.newAnswer = {};
        	index();
    	});
    }
    $scope.addQuestion = function() {
      $scope.newQuestion._user = $scope.currentUser._id;
      questionFactory.addQuestion($scope.newQuestion, function(question) {
        console.log(question)
        $scope.newQuestion = {};
        index();
        $location.url('/dashboard');
      });
    }
    $scope.addLike = function(answerId){
      questionFactory.addLike(answerId, function(like) {
        console.log('likes in controller', like);
        index();
      })
    }


    index();
}])
