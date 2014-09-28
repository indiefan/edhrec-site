app.directive("cardAnchor", function() {
  return {
    restrict: "E",
    scope: {
      name: "@"
    },
    templateUrl: "app/directives/cardAnchor.html",
    controller: function($scope, cardService) {
      $scope.getCardUrl = function(name) {
        return cardService.getCardUrl(name);
      };

      $scope.getCardImage = function(name) {
        return cardService.getCardImage(name);
      };      
    }
  }
});