'use strict';

angular.module('debateTableApp.auth', [
  'debateTableApp.constants',
  'debateTableApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
