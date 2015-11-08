app.controller('ConnexionCreateLoginController', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http) {

  $scope.update = function(newUser) {
        //On recupere la valeur des champ et on les enregistre dans le scoop
        $rootScope.pseudo = angular.copy(newUser.pseudo);
        $scope.pseudo = angular.copy(newUser.pseudo);
        $scope.mdp = angular.copy(newUser.mdp);
        //On traite la connexion
        $http.get('http://cobra-framework.com:3000/api/events/' + roomPseudo).success(function(data) {
          $scope.messages = [];
          var mdp;
          var pseudo;
          for (var i = 0; i < data.Events.length; i++) {
            var contenuBDD = (JSON.parse(data.Events[i].content));
            mdp = contenuBDD.message.mdp;
            pseudo = contenuBDD.message.pseudo;

            if($scope.pseudo == pseudo){
              alert("pseudo non disponible");
              return false;
            }
          }
          cobra.sendMessage({pseudo: $scope.pseudo, mdp: $scope.mdp},roomPseudo,true);
          $rootScope.divAccueil = true;
          $rootScope.divNotifications = true;
          $rootScope.divInfo = true;
          $rootScope.divMenu = true;
          $rootScope.divConnexion = false;
          return true;
        });
        
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);