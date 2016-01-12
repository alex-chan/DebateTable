'use strict';





angular.module('debateTableApp')
    .controller('TopicCtrl', function ($scope, $http, Topic) {
        $scope.message = 'Hello';

        console.log("fuck");

        console.log( Topic );

        $scope.topics = Topic.query()

        //self = this;
        //
        //$http.get('/api/topics')
        //    .then( (response) => {
        //        $scope.topics = response.data
        //    })

});
