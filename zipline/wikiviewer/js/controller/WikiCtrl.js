app.controller('WikiCtrl', function($scope, $http) {
    
    
    
    $scope.GetQuery = function() {
        $scope.name = [];
        $scope.description = [];
        $scope.url = [];
        
        getSearchBox = $('#searchbox-default').val();
        $http.jsonp('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=JSON_CALLBACK&search=' + getSearchBox)
        .success(function(data) {
            $scope.results = data;
            
            for(var i = 0; i < data[1].length; i++) {
                $scope.name.push(data[1][i]);
                $scope.description.push(data[2][i]);
                $scope.url.push(data[3][i]);
            };
            
            
            console.log(data);
        });
        
    }
});