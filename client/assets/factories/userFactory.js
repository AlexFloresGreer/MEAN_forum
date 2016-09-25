console.log('userFactory working!');

app.factory('userFactory', ['$http', function($http) {
  var users = [];
  var user = [];

  return {
    index : function(callback) {
      $http.get('/users').then( function(returned_data){
        if (typeof(callback) === 'function') {
          users = returned_data.data;
          callback(users);
        }
      });
    },
    create : function(newUser, callback) {
      $http.post('/users', newUser).then(function(response){
        if (typeof(callback) === 'function') {
          users = response.data;
          callback(users);
        }
      });
    },
    show : function(idx, callback) {
      $http.get(`/users/${idx}`).then(function(returned_data){
        if (typeof(callback) === 'function') {
          user = returned_data.data;
          callback(user);
        }
      });
    },
    getUser : function(user_id, callback) {
      $http.get(`/users/${user_id}`).then( function(returned_data){
        if (typeof(callback) === 'function') {
          callback(returned_data.data);
        }
      });
      return user;
    }
  }
}]);
