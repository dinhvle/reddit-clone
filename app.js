(function() {
  var app = angular.module('redditish', ['ngAnimate', 'ui.bootstrap']);

  app.controller('PostController', function() {
    this.posts = pokemons;
  })

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

  var pokemons = [{
      title: "Ivysaur",
      author: "Ash",
      imageurl: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" ,
      description: "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      comments: [{
        author: "TeamValor",
        text: "We only like red pokemons!"
      }, {
        author: "TeamCool",
        text: "We love it!"
      }],
      createOn: 1397490980837
    }, {
      title: "Metapod",
      author: "Rock",
      imageurl: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png" ,
      description: "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
      comments: [{
        author: "TeamValor",
        text: "Eww it's a bug!"
      }, {
        author: "TeamCool",
        text: "We like it!"
      }],
      createOn: 1397490980837
    }];

})();
