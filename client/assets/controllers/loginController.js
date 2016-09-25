console.log('login controller working!');

app.controller('loginController', ['$scope', 'userFactory', '$location','$routeParams',  '$cookies', '$routeParams', '$cookies', function($scope, userFactory, $location, $routeParams, $cookies) {

  $scope.loginUser = function() {
    userFactory.create($scope.newUser, function(retData) {
      console.log('retData from controller', retData);
      if(retData.errors) {
        console.log('Errors in userFactory.create controller');
        $scope.errors = retData.errors;
        $scope.newUser = {}
      }
      else {
        $cookies.putObject('user', {firstname:retData.firstname, _id:retData._id});
        $scope.currentUser = $cookies.getObject('user');
        $location.url('/dashboard');
      }
    });
  };
}]);
