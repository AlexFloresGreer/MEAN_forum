var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){

  $routeProvider

  .when('/',{
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/dashboard',{
    templateUrl: 'partials/dashboard.html',
    controller: 'questionController'
  })
  .when('/new_question',{
    templateUrl: 'partials/new_question.html',
    controller: 'questionController'
  })
  .when('/questions/:id',{
    templateUrl: 'partials/show_question.html',
    controller: 'showquestionController'
  })
  .when('/questions/:id/new_answer',{
    templateUrl: 'partials/new_answer.html',
    controller: 'questionController'
  })
  // .when('/answer/:id',{
  //   templateUrl: 'partials/topic.html',
  //   controller: 'topicController'
  // })
  // .when('/users/:id',{
  //   templateUrl: 'partials/user.html',
  //   controller: 'userController'
  // })
  // .when('/users',{
  //   templateUrl: 'partials/user.html',
  //   controller: 'userController'
  // })
  .otherwise({
    redirectTo: '/'
  });
});
