app.controller('MainController', function($scope, $http) {
    
//    $scope.username = [
//        {arteezy: $http.get("https://api.twitch.tv/kraken/streams/arteezy") },
//        {cerebralwallsy: $http.get("https://api.twitch.tv/kraken/streams/cerebralwallsy") },
//        {feardarkness: $http.get("https://api.twitch.tv/kraken/streams/feardarkness") },
//        {blackdotatv: $http.get("https://api.twitch.tv/kraken/streams/blackdotatv") },
//    ];
    
    
    $scope.test = [];
    
    for(var i = 0; i < usernames.length; i++) {
        var current = usernames[i];
        $http.get("https://api.twitch.tv/kraken/streams/" + current)
        .success(function(data) {
            if(data.stream !== null) {
            $scope.test.push(data);
            console.log(data);
            }
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