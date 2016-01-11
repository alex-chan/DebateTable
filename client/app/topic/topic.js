'use strict';

angular.module('debateTableApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('topic', {
        url: '/topics',
        templateUrl: 'app/topic/topic.html',
        controller: 'TopicCtrl'
      });
  });
