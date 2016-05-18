'use strict';

var TodoApi = function($http) {
  this.get = function(type) {
    return $http.get('/api/' + type);
  }

  this.getAll = function() {
    return $http.get('/api/');
  };

  this.update = function(type, todos) {
    return $http.put('/api/' + type, todos);
  };

};

TodoApi.$inject = ['$http'];

angular.module('todoApp').service('TodoApi', TodoApi);
