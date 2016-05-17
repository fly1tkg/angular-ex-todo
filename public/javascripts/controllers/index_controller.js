'use strict';

var controllers = angular.module('todoApp', []);

controllers.controller('todoController', ['$scope', '$http',
    function($scope, $http) {
      $scope.todos = {
        current: [
          {
            title: 'work'
          }
        ],
        backlog: [
          {
            title: 'lunch'
          }
        ],
        icebox: [
          {
            title: 'sleep'
          }
        ]
      }
    }
]);
