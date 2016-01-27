var app = angular.module('TwitchTV', ['ngRoute'])
.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                controller: 'MainController',
                templateUrl: 'views/online.html',
            })
                .when('/offline', {
                controller: 'MainController',
                templateUrl: 'views/offline.html',
            })
                .when('/all', {
                controller: 'MainController',
                templateUrl: 'views/all.html',
            })
                .otherwise({
                redirectTo: '/'
            })
        }
        ]);
