app.controller('userController', ['$scope', 'userFactory', '$location', '$routeParams', '$cookies', function($scope, userFactory, $location, $routeParams, $cookies) {

console.log('userController working!');

  var index = function() {
    $scope.currentUser = $cookies.getObject('user');
    userFactory.getUser($routeParams.id, function(user) {
      $scope.user = user;
      console.log(user, 'user from user.Factory index');
    });
  }
//on load
  index();
}])
