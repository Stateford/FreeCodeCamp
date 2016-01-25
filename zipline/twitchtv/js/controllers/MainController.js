app.controller('MainController', function($scope, $http) {
    
    var streamList = ['arteezy', 'cerebralwallsy', 'feardarkness', 'blackdotatv'];

    $scope.username = {};
    
    for(var i = 0; i < streamList.length; i++) {
        $scope.streamList[i] = {};
        $http.get("https://api.twitch.tv/kraken/streams" + streamList[i])
        .success(function(data) {
            $scope.username.streamList[i] = data;
            console.log($scope.data)
        })
        .error(function(data) {
            console.log('got nothing');
        });
    };
    
    $scope.streams = {};
    $http.get("https://api.twitch.tv/kraken/streams/blackdotatv")
    .success(function(data) {
        $scope.streams = data;
        console.log($scope.data);
    })
    .error(function(data) {
        console.log('got nothing');
    });
    
});