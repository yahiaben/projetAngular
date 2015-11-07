app.controller('AffichageConnexionController', ['$scope',function($scope) {
  $scope.afficherLogin = function() {
    var divL = document.getElementById('divLogin');
    divL.style.visibility="visible";
    var divA = document.getElementById('divAccount');
    divA.style.visibility="hidden";
    btnLogin.className ="active";
    btnAccount.className="";
  };
  $scope.afficherCreateAccount = function() {
    var divA = document.getElementById('divAccount');
    divA.style.visibility="visible";
    var divL = document.getElementById('divLogin');
    divL.style.visibility="hidden";
    btnLogin.className ="";
    btnAccount.className="active";
  };
}]);

