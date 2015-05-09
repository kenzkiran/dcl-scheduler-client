var myApp = angular.module("myApp", []);

myApp.run([function() {
    console.log("Inside run");
}]);

myApp.controller('myCtrl', function($scope, $timeout) {
    $scope.teams = [ 'Team A', 'Team B', 'Team C' ];
    $scope.newbie = ''
    $scope.add = function() {
        console.log("Adding entry: " +  $scope.newbie);
        var index =  $scope.teams.indexOf($scope.newbie);
        if (index === -1) {
            $scope.teams.push($scope.newbie);
        } else {
            console.log("Add only unique teams");
        }
    };
    $scope.deleteEntry = function(team) {
        console.log("deleteEntry " + team);
        for(var i = 0; i < $scope.teams.length; ++i) {
            var index =  $scope.teams.indexOf(team);
            if (index !== -1) {
                $scope.teams.splice(index, 1);
                break;
            }
        }
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