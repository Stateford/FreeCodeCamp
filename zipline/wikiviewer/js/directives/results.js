app.directive('results', function() {
    return {
        restrict: 'E',
        scope: {
            info:'='
        },
        templateUrl: 'js/directives/results.html'
    };
});
