app.controller('NotifController', ['$scope','$rootScope', '$http','$log', function($scope, $rootScope, $http,$log) {
  
  $http.get('http://cobra-framework.com:3000/api/events/' + roomPseudo).success(function(data) {
    $scope.lesPseudos = [];
    console.log(data.Events.length);
    for (var i = data.Events.length-1; i >= 0; i--) {
     var contenuMsg = (JSON.parse(data.Events[i].content));
     
     var pseudo = contenuMsg.message.pseudo;
     
     $scope.lesPseudos.push(contenuMsg.message.pseudo);
     
   }
   console.log($scope.lesPseudos);
   $scope.users = $scope.lesPseudos;
 });


$scope.userSelected = [];

$scope.getMessages = function(){
  
  var promise = $http.get('http://cobra-framework.com:3000/api/events/' + room);
  
  promise.success(function (data) {

    $scope.messages = [];
    
    for (var i = data.Events.length-1; i >= 0; i--) {
     var contenuMsg = (JSON.parse(data.Events[i].content));
     var pseudo = contenuMsg.message.pseudo;
     var tabReceiver = contenuMsg.message.receivers;
     var forMe = tabReceiver.indexOf($rootScope.pseudo);
     
     if($rootScope.pseudo == pseudo || forMe != -1 || tabReceiver.length == 0)
      $scope.messages.push(contenuMsg);
   }
 })
  .then(function (data) {
    setTimeout(function() {$scope.getMessages(),500});
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
        cobra.sendMessage({pseudo: this.pseudo, title: $scope.titre, content: $scope.message, receivers: $scope.userSelected},room,true);
        $scope.userSelected = [];
        
       
      };


    }]);

