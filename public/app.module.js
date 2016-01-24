'use strict';

angular.module('BrowseDribbble', ['ngAnimate'])
    .controller('main', ['$scope', 'DribbbleService',
        function($scope, DribbbleService) {

            $scope.latest = [];

            //return default shots when controller loads

            DribbbleService.getShots().then(function(data) {
                var json = JSON.parse(data.data);
                $scope.latest = json;
                console.log(json);
            });



            $scope.getShots = function() {
                $scope.latest = [];
                DribbbleService.getShots().then(function(data) {
                    var json = JSON.parse(data.data);

                    $scope.latest = json;
                    console.log(json);
                });
            }


            //return all animated shots
            $scope.getAnimated = function() {
                $scope.latest = [];

                DribbbleService.getAnimated().then(function(data) {
                    var json = JSON.parse(data.data);

                    $scope.latest = json;
                    console.log(json);
                });
            }

            //return all debut shots
            $scope.getDebuts = function() {
                $scope.latest = [];

                DribbbleService.getDebuts().then(function(data) {
                    var json = JSON.parse(data.data);

                    $scope.latest = json;
                    console.log(json);
                });
            }


        }
    ]);
