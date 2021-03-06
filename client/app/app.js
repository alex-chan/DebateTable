'use strict';

angular.module('debateTableApp', [
  'debateTableApp.auth',
  'debateTableApp.admin',
  'debateTableApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      //.otherwise('/');

    $locationProvider.html5Mode(true);
  });
