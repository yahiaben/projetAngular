app.controller('NotifController', ['$scope','$rootScope', '$http','$log', function($scope, $rootScope, $http,$log) {

  /*$http.get('http://cobra-framework.com:3000/api/events/' + room).success(function(data) {
    $scope.messages = [];
    console.log(data.Events.length);
    for (var i = data.Events.length-1; i > 0; i--) {
     var contenuMsg = (JSON.parse(data.Events[i].content));
     console.log(contenuMsg);
     $scope.messages.push(contenuMsg);
   }

 });*/


$scope.getMessages = function(){
  var promise = $http.get('http://cobra-framework.com:3000/api/events/' + room);
  console.log("je rentre ici ");
  promise.success(function (data) {

    $scope.messages = [];
    console.log(data.Events.length);
    for (var i = data.Events.length-1; i > 0; i--) {
     var contenuMsg = (JSON.parse(data.Events[i].content));
     console.log(contenuMsg);
     $scope.messages.push(contenuMsg);
   }
 })
  .then(function (data) {
    setTimeout(function() {$scope.getMessages(),500});
    //return promise;
        // data is the original server response object, NOT 'a new value'
        // data.data are the things from the API
      });
};

$scope.getMessages();

$scope.reset = function() {
        console.log("je rentre ici ");
        $scope.titre = "";
        $scope.message = "";
      };

$scope.EnvoyerMsg = function(notification) {

        //On recupere la valeur des champ et on les enregistre dans le scoop
        $scope.titre = angular.copy(notification.titre);
        $scope.message= angular.copy(notification.message);
        cobra.sendMessage({pseudo: this.pseudo, title: $scope.titre, content: $scope.message},room,true);
        
        /*var jsonMsg = {
          "room": {
            room
          },
          "message": {
            "content" : $scope.message,
            "pseudo" : $rootScope.pseudo,
            "title" : $scope.titre
          }
        };
        $scope.messages.unshift(jsonMsg);*/
      };


    }]);

