angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

/*.controller('TeamListCtrl', function($scope) {
  $scope.teams = [
    { title: 'Athlone', id: 1 },
    { title: 'Bray', id: 2 },
    { title: 'Bohs', id: 3 },
    { title: 'Derry', id: 4 },
    { title: 'St Pats', id: 5 },
    { title: 'Shamrock Rovers', id: 6 }
  ];
})

.controller('TeamDetailCtrl', function($scope, $stateParams) {
})*/

.controller('TeamListCtrl', ['$scope', 'Team',
  function ($scope, Team) {
      
    $scope.teams = Team.query();
 
    /*$scope.orderProp = 'age';*/
  }])

.controller('TeamDetailCtrl', ['$scope', '$stateParams', 'Team',
    function($scope, $stateParams, Team) {
        $scope.team = Team.get({teamId:$stateParams.teamId}, function(team){
            $scope.mainImageUrl = team.images[0];
        })
        
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
                
    }]);