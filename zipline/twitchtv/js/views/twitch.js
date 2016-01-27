app.directive('twitch', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        template: "js/directives/twitch.html"
    };
});
