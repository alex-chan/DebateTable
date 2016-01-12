'use strict';

angular.module('debateTableApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('topic', {
        url: '/topics/:id',
        templateUrl: 'app/topic/topic.html',
        controller: 'TopicCtrl'
      });
  });


angular.module('debateTableApp').factory('Topic', function($resource) {


    return $resource('/api/topics/:id', {
        id: '@_id'

    }, {

        update: {
            method: "PUT"
        }
    });
});
