app.factory('twitch', ['$http', function($http) {
    for(var i = 0; i < streamList.length; i++) {
        return $http.get('https://api.twitch.tv/kraken/streams/' + streamList[i])
    }
        .success(function(data) {
            return data;
    })
        .error(function(data) {
            return data;
    });
}]);