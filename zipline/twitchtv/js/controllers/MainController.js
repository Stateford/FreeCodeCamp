app.controller('MainController', function($scope, $http) {

    
    var usernames = ["arteezy", "feardarkness", "cerebralwallsy", "summit1g", "pianoimproman", "wagamamatv", "monstercat", "blackdotatv", "illidanstrdoto"];
    
    $scope.online = [];
    $scope.offline = [];
    $scope.offlinedata = [];
    $scope.all = [];
    
    for(var i = 0; i < usernames.length; i++) {
        var current = usernames[i];
        $http.get("https://api.twitch.tv/kraken/streams/" + current)
        .success(function(data) {
            if(data.stream !== null) {
                console.log(data.stream);
                $scope.online.push(data);
            }
            else if(data.stream === undefined || data.stream === null) {
                console.log('offline');
                console.log(data);
                $scope.offline.push(current);
                console.log('username');
                console.log(current);
                console.log($scope.offline);
            }
            $scope.all.push(data);
            console.log($scope.all);
        })
        .error(function(data) {
            console.log('got nothing');
        })
    }
    console.log($scope.offline);
});
