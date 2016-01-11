'use strict';

angular.module('debateTableApp')
    .controller('TopicCtrl', function ($scope, $http) {
        //$scope.message = 'Hello';

        self = this;

        $http.get('/api/topics')
            .then( (response) => {
                $scope.topics = response.data
            })

});
