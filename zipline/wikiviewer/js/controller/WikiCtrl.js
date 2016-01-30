app.controller('WikiCtrl', function($scope, $http) {
    $http.get('')
    .success(function(data) {
        $scope.results = data;
    })
});