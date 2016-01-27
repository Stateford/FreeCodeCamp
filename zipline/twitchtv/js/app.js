var app = angular.module('TwitchTV', ['ngRoute']);
app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                controller: 'MainController',
                templateUrl: 'views/online.html',
            })
                .when('/online', {
                controller: 'MainController',
                templateUrl: 'views/online.html'
            })
                .when('/offline', {
                controller: 'MainController',
                templateUrl: 'views/offline.html'
            })
                .when('/all', {
                controller: 'MainController',
                templateUrl: 'views/all.html'
            })
        }
        ]);
