'use strict';

beerApp.controller('BeerController',
   function BeerController($scope) {

       // Sample Beer
       $scope.beer = {
           id: 1,
           name: "Hocus Pocus",
           category: {
               name: "Irish Ale"
           },
           brewer: {
               name: "Pixie Wonder",
               address: {
                   addressline1: "1 Sussex St",
                   addressline2: "",
                   state: "NSW",
                   postcode: 2000,
                   country: "Australia"
               }
           },
           description: "Our take on a classic summer ale.  A toast to weeds, rays, and summer haze.  A light, crisp ale for mowing lawns, hitting lazy fly balls, and communing with nature, Hocus Pocus is offered up as a summer sacrifice to clodless days. Its malty sweetness ..."
       }
   }
);
