app.controller('questionController', ['$scope', 'questionFactory', 'userFactory', '$location', '$routeParams', '$cookies', function($scope, questionFactory, userFactory, $location, $routeParams, $cookies) {

console.log('question controller working!');

var index = function() {
    $scope.currentUser = $cookies.getObject('user');
    questionFactory.getQuestions( function( questions ) {
      $scope.questions = questions;
      $scope.questionsId = $routeParams.id;

      });
    }
    $scope.addAnswer = function () {
    	$scope.newAnswer._user = $scope.currentUser._id;
    	questionFactory.addAnswer($routeParams.id, $scope.newAnswer, function(answer) {
        	$scope.newAnswer = {};
        	index();
          $location.url('/questions/:id');
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


    index();
}])
