'use strict';

var app = angular.module('todoApp', ['dndLists']);

function todoListCtrl() {
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

  this.addTodo = function(type) {
    type.todos.unshift({title: 'new todo'});
  }
};

app.directive('todolist', function() {
  return {
    restrict: "E",
    templateUrl: '/todolist',
    controller: todoListCtrl,
    controllerAs: 'vm'
  }
});

angular.bootstrap(document.body, [app.name]);
