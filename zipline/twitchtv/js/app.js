var app = angular.module('TwitchTV', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/online/', {
                templateUrl: 'directives/online.html',
                controller: 'MainController'
            })
                .when('/offline/', {
                templateUrl: 'directives/offline.html',
                controller: 'MainController'
            })
                .when('/all/', {
                templateUrl: 'directives/all.html',
                controller: 'MainController'
            })
                .otherwise({
                redirectTo: '/'
            })
        }
        ]);