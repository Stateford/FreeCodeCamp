app.controller('MainController', function($scope, $http) {
    $scope.streams = {};
    $http.get("https://api.twitch.tv/kraken/streams/blackdotatv")
    .success(function(data) {
        $scope.streams = data;
        console.log($scope.results);
    })
    .error(function(data) {
        console.log('got nothing');
    });
    
});