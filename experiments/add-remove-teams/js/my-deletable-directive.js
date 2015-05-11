var myApp = angular.module('myApp');

myApp.controller('myCtrl', function($scope, TeamList) {
    $scope.TeamList = TeamList;
    $scope.teams = $scope.TeamList.teams;

    $scope.deleteEntry = function(teamName) {
        console.log("Deleting entry: " + teamName);
        $scope.TeamList.removeTeam(teamName);
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

