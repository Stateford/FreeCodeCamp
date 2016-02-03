app.controller('WikiCtrl', function($scope, $http) {
    
    $scope.GetQuery = function() {
        getSearchBox = $('.searchbox').val();
        $http.get('' + getSearchBox)
        .success(function(data) {
            $scope.results = data;
        })
        
    }
});