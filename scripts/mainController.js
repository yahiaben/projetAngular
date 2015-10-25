var app = angular.module('notifApp',[]);
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