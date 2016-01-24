'use strict';


angular.module('BrowseDribbble')
    .factory('DribbbleService', ['$http', '$q', function($http, $q) {

        //cache data
        //get data from different endpoints
        //

        return {
            getShots: function() {
                return $http.get('/api/shots');
            },
            getAnimated: function() {
                return $http.get('/api/animated');
            },
            getDebuts: function() {
                return $http.get('/api/debuts');
            }
        }
    }]);
