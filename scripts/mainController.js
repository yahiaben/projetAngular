var app = angular.module('notifApp',[]);

app.run(function($rootScope) {
  $rootScope.divAccueil = false;
  $rootScope.divNotifications = false;
  $rootScope.divInfo = false;
  $rootScope.divMenu = false;
  $rootScope.divConnexion = true;
  $rootScope.pseudo = "";
});

