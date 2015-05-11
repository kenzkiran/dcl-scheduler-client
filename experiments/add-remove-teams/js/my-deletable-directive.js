var myApp = angular.module('myApp');

myApp.controller('myCtrl', function($scope, TeamList) {
    $scope.teams = TeamList.teams;
    $scope.newbie = ''
    $scope.add = function() {
        console.log("Adding entry: " +  $scope.newbie);
    };
    $scope.deleteEntry = function(team) {
        console.log("Deleting entry: " + team);
    }
});

myApp.directive('myDeletable', function() {
    console.log("Adding directive");
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            'team': '=',
            'close': '&onClose'
        },
        templateUrl: 'templates/my-deletable.html'
    };
});

