'use strict';

angular
  .module('employeesJsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'MainCtrl'
        })
        .when('/manage', {
            templateUrl: 'views/manage.html',
            controller: 'MainCtrl'
        })
        .when('/show', {
            templateUrl: 'views/show.html',
            controller: 'ShowCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });




