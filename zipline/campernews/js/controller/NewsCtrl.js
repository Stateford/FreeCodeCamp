app.controller('NewsCtrl', function($scope, $http) {
    
    $http.get('http://www.freecodecamp.com/news/hot')
    .success(function(data) {
        $scope.news = data;
        
        if(data.image === null) {
            $scope.picture = data.image;
        }
    })
    .error(function(data) {
        console.log('got nothing');
    })
});