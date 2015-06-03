'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, $location, $rootScope, Authentication) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    var user = {
      username:'',
      password:''
    };
    $scope.user = user;
    $scope.message = 'Hello world';
    $scope.login = function(){
        Authentication.authenticateUser($scope.user.username,$scope.user.password).get({username:$scope.user.username}, function(responce){
          if(responce.results.length != 0){
              $rootScope.userName = user.password;
              $rootScope.password = user.password;
              $location.path('/patients');
          }
        });

    };
  });
