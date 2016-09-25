app.controller('showquestionController', ['$scope', 'questionFactory', 'userFactory', '$location', '$routeParams', '$cookies', function($scope, questionFactory, userFactory, $location, $routeParams, $cookies) {

console.log('showquestion controller working!');

var index = function() {
    $scope.currentUser = $cookies.getObject('user');
    questionFactory.showQuestions( $routeParams.id, function( questions ) {
      $scope.questions = questions;
      console.log('we made it to showquestion');
      console.log('question', questions);

      });
  }
  index();
}])
