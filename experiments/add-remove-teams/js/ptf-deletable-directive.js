var myApp = angular.module('myApp');

myApp.controller('myCtrl', function($scope, TeamList) {
    $scope.TeamList = TeamList;
    $scope.teams = $scope.TeamList.teams;

    $scope.deleteEntry = function(teamName) {
        console.log("Deleting entry: " + teamName);
        $scope.TeamList.removeTeam(teamName);
    }
});

/***
 * ptfDeletable will add a hover delete button on any element enclosing.
 *
 */
myApp.directive('ptfDeletable', function() {
    console.log("Adding directive");
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            'item': '=',
            'delete': '&onDelete'
        },
        templateUrl: 'templates/ptf-deletable.html'
    };
});

