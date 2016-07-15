(function() {
  var app = angular.module('redditish', ['ngAnimate', 'ui.bootstrap']);

  app.controller('DropdownCtrl', function($scope, $log) {
    $scope.items = [
      'Votes',
      'Date',
      'Title'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
  });
})();