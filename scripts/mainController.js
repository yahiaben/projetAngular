var app = angular.module('notifApp',[]);

app.run(function($rootScope) {
  $rootScope.divAccueil = false;
  $rootScope.divNotifications = false;
  $rootScope.divInfo = false;
  $rootScope.divMenu = false;
  $rootScope.divConnexion = true;
});

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://cobra-framework.com:3000/api/events/notifications6-yahia').success(function(data) {
    $scope.messages = [];
    console.log(data.Events.length);
    for (var i = 0; i < data.Events.length; i++) {
     var contenuMsg = (JSON.parse(data.Events[i].content));
     $scope.messages.push(contenuMsg);
   }

 });
}]);


app.controller('ConnexionController', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http) {

  $scope.update = function(user) {
        //On recupere la valeur des champ et on les enregistre dans le scoop
        $scope.pseudo = angular.copy(user.pseudo);
        $scope.mdp = angular.copy(user.mdp);
        //On traite la connexion
        $http.get('http://cobra-framework.com:3000/api/events/BDDPseudo4').success(function(data) {
          $scope.messages = [];
          var mdp;
          var pseudo;
          for (var i = 0; i < data.Events.length; i++) {
            var contenuBDD = (JSON.parse(data.Events[i].content));
            mdp = contenuBDD.message.mdp;
            pseudo = contenuBDD.message.pseudo;
            if($scope.pseudo == pseudo && $scope.mdp == mdp){
              $rootScope.divAccueil = true;
              $rootScope.divNotifications = true;
              $rootScope.divInfo = true;
              $rootScope.divMenu = true;
              $rootScope.divConnexion = false;
              return true;
            }
          }
          alert("pseudo ou mot de passe non valide");
        });
        
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);
