app.controller('MainController', function($scope, $http) {
    
//    $scope.username = [
//        {arteezy: $http.get("https://api.twitch.tv/kraken/streams/arteezy") },
//        {cerebralwallsy: $http.get("https://api.twitch.tv/kraken/streams/cerebralwallsy") },
//        {feardarkness: $http.get("https://api.twitch.tv/kraken/streams/feardarkness") },
//        {blackdotatv: $http.get("https://api.twitch.tv/kraken/streams/blackdotatv") },
//    ];
    
    var usernames = ['arteezy', 'feardarkness', 'cerebralwallsy', 'summit1g', 'pianoimproman'];
    
    $scope.online = [];
    $scope.offline = [];
    $scope.all = [];
    
    for(var i = 0; i < usernames.length; i++) {
        var current = usernames[i];
        $http.get("https://api.twitch.tv/kraken/streams/" + current)
        .success(function(data) {
            if(data.stream !== null) {
            $scope.online.push(data);
            }
            else if(data.stream === null) {
                $scope.offline.push(data);
            }
            $scope.all.push(data);
        })
        .error(function(data) {
            console.log('got nothing');
        })
    }
    console.log($scope.test);
    $scope.streams = {};
    $http.get("https://api.twitch.tv/kraken/streams/blackdotatv")
    .success(function(data) {
        $scope.streams = data;
    })
    .error(function(data) {
        console.log('got nothing');
    });
    
});