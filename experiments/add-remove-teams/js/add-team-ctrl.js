angular.module('myApp').controller('AddTeamModalCtrl', function ($scope, $modal, $log, TeamList) {
    $scope.teamList = TeamList;
    $scope.animationsEnabled = true;
    $scope.open = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'templates/add-team-modal.html',
            controller: 'AddTeamInstanceCtrl',
            size: size,
            resolve: {
                teamList: function () {
                    return $scope.teamList;
                }
            }
        });

        modalInstance.result.then(function (newTeam) {
            console.log("Ravi: new team" + JSON.stringify(newTeam));
            $scope.teamList.addTeam(newTeam);
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('myApp').controller('AddTeamInstanceCtrl', function ($scope, $modalInstance, teamList) {
    $scope.locations = teamList.locations;
    $scope.newTeam = { name: '', captain: '', loc: ''};
    $scope.add = function () {
        $modalInstance.close($scope.newTeam);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});