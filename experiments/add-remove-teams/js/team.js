var app = angular.module('myApp');

app.factory('TeamList', function() {
   function Team(name, loc, captain) {
       this.name = name;
       this.loc = loc || 'planet-earth';
       this.captain = captain || 'captain-kirk';
       this.toString = function(){ return this.name + ' ' + this.captain}
   };

    var TeamList = {
        locations: ['plano', 'allen', 'richardson'],
        teams: [],
        getIndex: function(teamName) {
            var teams = this.teams;
            for(var i = 0; i < teams.length; ++i) {
                if (teams[i].name === teamName) {
                    return i;
                }
            }
            return -1;
        },
        addTeam: function(newTeam) {
            var teams = this.teams;
            var index = this.getIndex(newTeam.name);
            if (index === -1) {
                console.log("TeamList: Adding team: " + newTeam.name);
                teams.push(newTeam);
            }
        },
        removeTeam: function(remTeamName) {
            var teams = this.teams;
            var index = this.getIndex(remTeamName);
            if (index !== -1) {
                console.log("TeamList: Removing team: " + remTeamName);
                teams.splice(index, 1);
            }
        }
    };

    TeamList.addTeam(new Team('Team A'));
    TeamList.addTeam(new Team('Team B', 'planet-saturn', 'captain-spock'));
    return TeamList;
});