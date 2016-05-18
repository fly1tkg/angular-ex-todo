'use strict';

function todoListCtrl(TodoApi) {
  var vm = this;

  vm.todos = [];

  vm.addTodo = function(type) {
    type.todos.unshift({title: 'new todo'});
    vm.todoChanged(type.type);
  };

  vm.deleteTodo = function(type, index) {
    type.todos.splice(index, 1);
    vm.todoChanged(type.type);
  };

  vm.todoChanged = function(type) {
    var todos = findTypeItem(type);
    console.log(todos);
    TodoApi.update(type, todos).then(function(res) {
    });
  }

  TodoApi.getAll().then(function(res) {
    vm.todos = res.data;
    if (findTypeItem('current') == undefined) {
      vm.todos.push({type: 'current', todos: []})
    };

    if (findTypeItem('backlog') == undefined) {
      vm.todos.push({type: 'backlog', todos: []})
    };

    if (findTypeItem('icebox') == undefined) {
      vm.todos.push({type: 'icebox', todos: []})
    };
  });

  var findTypeItem = function(type) {
    return vm.todos.find(function(val) {
      return val.type == type
    });
  }
};

todoListCtrl.$inject = ['TodoApi'];

var app = angular.module('todoApp', ['dndLists']);

app.directive('todolist', function() {
  return {
    bindToController: true,
    templateUrl: '/todolist',
    controller: todoListCtrl,
    controllerAs: 'vm'
    }
});

//angular.element(document).ready(function() {
//  angular.bootstrap(document.body, [app.name]);
//});
