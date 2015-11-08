app.controller('RechercherController', ['$scope', '$rootScope','$http', function($scope, $rootScope, $http) {

  $http.get('http://cobra-framework.com:3000/api/events/'+roomPseudo).success(function(data) {
    $scope.messages = [];
    var pseudo;
    for (var i = 0; i < data.Events.length; i++) {
      var contenuBDD = (JSON.parse(data.Events[i].content));

      pseudo = contenuBDD.message.pseudo;
      $rootScope.lesPseudos.push(pseudo);
    }

  });


}]);