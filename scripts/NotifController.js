app.controller('NotifController', ['$scope','$rootScope', '$http', function($scope, $rootScope, $http) {
  $scope.name = "scopeEnvoyerNotif";
  $scope.counter = 0;
  $http.get('http://cobra-framework.com:3000/api/events/' + room).success(function(data) {
    $scope.messages = [];
    console.log(data.Events.length);
    for (var i = data.Events.length-1; i > 0; i--) {
     var contenuMsg = (JSON.parse(data.Events[i].content));
     $scope.messages.push(contenuMsg);
   }

   $scope.EnvoyerMsg = function(notification) {

        //On recupere la valeur des champ et on les enregistre dans le scoop
        $scope.titre = angular.copy(notification.titre);
        $scope.message= angular.copy(notification.message);
        cobra.sendMessage({pseudo: this.pseudo, title: $scope.titre, content: $scope.message},room,true);
        var jsonMsg = {
          "room": {
            room
          },
          "message": {
            "content" : $scope.message,
            "pseudo" : $rootScope.pseudo,
            "title" : $scope.titre
          }
        };
        $scope.messages.unshift(jsonMsg);
      };
    });
}]);

