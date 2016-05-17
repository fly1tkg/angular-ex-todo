'use strict';

var controllers = angular.module('todoApp', ['dndLists']);

controllers.controller('todoController', function() {
    this.todos = [
      {
        type: 'current',
        todos: [
          { title: 'work' },
          { title: 'work2' },
          { title: 'work3'}
        ]
      },
      {
        type: 'backlog',
        todos: [
          { title: 'work' }
        ]
      },
      {
        type: 'icebox',
        todos: [
          { title: 'lunch' }
        ]
      }
  ]
});
