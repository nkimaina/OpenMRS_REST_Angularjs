'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('patientsListCtrl', ['$scope', 'Concepts', function ($scope, Concepts) {
            $scope.concepts = [];


            $scope.clearConcepts = function(){
                $scope.concepts = [];
            };

            $scope.getConcepts = function(){
              Concepts.getConcepts().get({}, function (data) {
                $scope.concepts = data.results;
              });
            };

}]);
