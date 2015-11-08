var app = angular.module('notifApp', ['angular.chosen']);
app.run(function($rootScope) {
  $rootScope.divAccueil = false;
  $rootScope.divNotifications = false;
  $rootScope.divInfo = false;
  $rootScope.divMenu = false;
  $rootScope.divConnexion = true;
  $rootScope.pseudo = "";
  $rootScope.lesPseudos =[];
});

