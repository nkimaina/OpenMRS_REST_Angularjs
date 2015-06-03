'use strict';

var urlBase = 'https://test1.ampath.or.ke:8443/amrs/ws/rest/v1/';

var restApi = angular.module('restServices', ['ngResource']);

restApi.factory('Concepts', ['$http', '$rootScope', '$resource',
    function ($http, $rootScope, $resource) {

        var dataFactory = {};

        dataFactory.getConcepts = function () {
            //setUpHttpAuthenticationHeaders();
            return $resource(urlBase + 'concept?limit=5');
        };

        function setUpHttpAuthenticationHeaders() {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode($rootScope.userName + ':' + $rootScope.password);
        }
        return dataFactory;
    }]);

/*restApi.factory('Concepts', ['$http', '$rootScope', '$resource',
    function ($http, $rootScope, $resource) {

        var dataFactory = {};

        dataFactory.getConcepts = function () {
            return $resource(urlBase + 'concept?limit=5');
        };

        return dataFactory;
    }]);*/

restApi.factory('Authentication', ['$http', '$rootScope', '$resource',
    function ($http, $rootScope, $resource) {
        var dataFactory = {};

        dataFactory.isSessionInitialized = false;

        dataFactory.getSession = function () {
            return $resource(urlBase + 'session');
        };
        dataFactory.authenticateUser = function (username, password) {
            setUpHttpAuthenticationHeaders(username, password);
            return $resource(urlBase + 'user?q=:username', { username: '@username' });
        };

        function setUpHttpAuthenticationHeaders(username, password) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(username + ':' + password);
        }
        return dataFactory;
    }]);
