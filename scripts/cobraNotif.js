var cobra = new Cobra();

var room = "BDDRenduFinal";
var roomPseudo = 'BDDPseudo4'
var socketId;
var apiUrl = 'http://cobra-framework.com:3000/api/events/' + room;
cobra.connect('http://cobra-framework.com:8080');

cobra.connectionCallback = function () {
	cobra.joinRoom(room);
}

cobra.messageReceivedCallback = function (message) {
            // Lors de l'arrivée dans une room donne la liste des utilisateurs contenus dans la room
            if(message.type == "infos"){
            	for(var i = 0; i < message.clients.length; i++)
            	{
                    // Contient l'id du client
                    var client = message.clients[i];
                    
                  }
                // Mon id attribué par la room
                socketId = message.socketId;
              }
              else if (message.message) {
               // Message reçu, je le traite
               console.log(message.message.content);
             }
           }
           
           cobra.clientJoinedRoomCallback = function(data){
            // Un autre client a rejoint la room
          }
          
          cobra.clientLeftRoomCallback = function(data){
            // Un client a quitté la room
          }


          function MyCtrl($scope) {
            $scope.name = "scopeEnvoyerNotif";

            $scope.$watch("name", function(newValue, oldValue) {
              scope.counter = scope.counter + 1;
            });
          }


