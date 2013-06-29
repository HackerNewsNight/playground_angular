'use strict';

beerApp.controller('BeerController',
    function BeerController($scope, beerData) {

        // Beer Details
        $scope.beer = beerData.sampleData;
        $scope.beer.isReadonly = false;
        $scope.beer.editMode = false;

        // Sample Beers List...
        $scope.beers = beerData.beers;
        $scope.beers.isVisible = true;
        $scope.beers.sortOrder = "name";

        /// Controller Functions.

        $scope.toggleMode = function (obj) {
            obj.editMode = !obj.editMode;
        };

        $scope.toggle = function (obj) {
            obj.isVisible = !obj.isVisible;
        };

        $scope.downVoteDisabled = function (beer) {
            return beer.upVoteCount <= 0;
        };

        $scope.upVoteBeer = function (beer) {
            beer.upVoteCount++;
        };
        $scope.downVoteBeer = function (beer) {
            beer.upVoteCount--;
        };

        $scope.displayBeer = function (beer) {
            $scope.beer = beer;
        }
    }
);
