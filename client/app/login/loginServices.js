var services = angular.module('argue.login.services', []);

services.factory('Logins', function($http) {
  var postUsername = function(username) {
    return $http({
      method: 'POST',
      url: '/users',
      data: username
    })
    .then(function (resp) {
      return resp;
    });
  };
  return {
    postUsername: postUsername
  };
});

