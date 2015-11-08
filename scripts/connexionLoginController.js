app.controller('ConnexionLoginController', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http) {

  $scope.traiterConnexion = function(user) {
        //On recupere la valeur des champ et on les enregistre dans le scoop
        $rootScope.pseudo = angular.copy(user.pseudo);
        $scope.pseudo = angular.copy(user.pseudo);
        $scope.mdp = angular.copy(user.mdp);
        //On traite la connexion
        $http.get('http://cobra-framework.com:3000/api/events/'+roomPseudo).success(function(data) {
          $scope.messages = [];
          var mdp;
          var pseudo;
          for (var i = 0; i < data.Events.length; i++) {
            var contenuBDD = (JSON.parse(data.Events[i].content));
            mdp = contenuBDD.message.mdp;
            pseudo = contenuBDD.message.pseudo;
            console.log(pseudo + " " +mdp);
            //console.log($rootScope.lesPseudos);
            if($scope.pseudo == pseudo && $scope.mdp == mdp){
              $rootScope.divAccueil = true;
              $rootScope.divNotifications = true;
              $rootScope.divInfo = true;
              $rootScope.divMenu = true;
              $rootScope.divConnexion = false;
              return true;
            }
          }
          console.log($rootScope.lesPseudos);
          alert("pseudo ou mot de passe non valide");
          return false;
        });
        
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);