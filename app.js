(function() {
  var app = angular.module('redditish', ['ngAnimate', 'ui.bootstrap']);

  app.controller('PostController', function() {
    this.posts = pokemons;
  });

  app.controller('VoteController', function() {
    this.upVote = function(post) {
      post.votes += 1;
    }

    this.downVote = function(post) {
      post.votes -= 1;
    }
  })

  app.controller('DropdownCtrl', function($scope, $log) {
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
        imageurl: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        votes: 10,
        description: "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        comments: [{
          author: "Team Valor",
          text: "We only like red pokemons!"
        }, {
          author: "Team Instinct",
          text: "We love it!"
        }],
        createdOn: 1397490980837
      }, {
        title: "Charmander",
        author: "Missy",
        imageurl: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        votes: 0,
        description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
        comments: [{
          author: "Team Valor",
          text: "First!"
        }, {
          author: "Team Mystic",
          text: "Get out of here!"
        }],
        createdOn: 1397490980837
      }, {
        title: "Metapod",
        author: "Rock",
        imageurl: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
        votes: -10,
        description: "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
        comments: [{
          author: "Team Instinct",
          text: "Eww it's a bug!"
        }, {
          author: "Team Mystic",
          text: "We like it!"
        }],
        createdOn: 1397490980837
      }];
})();
