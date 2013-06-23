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
       };

       // Sample Beers List...
       $scope.beers = [
           {
               id: 2,
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
               description: "Our take on a classic summer ale.  A toast to weeds, rays, and summer haze.  A light, crisp ale for mowing lawns, hitting lazy fly balls, and communing with nature, Hocus Pocus is offered up as a summer sacrifice to clodless days. Its malty sweetness ...",
               upVoteCount: 0
           },
           {
               id: 3,
               name: "Fat Yak",
               category: {
                   name: "Irish Ale"
               },
               brewer: {
                   name: "Big Al's Lab",
                   address: {
                       addressline1: "1 Sussex St",
                       addressline2: "",
                       state: "NSW",
                       postcode: 2000,
                       country: "Australia"
                   }
               },
               description: "Is it dark in here. ",
               upVoteCount: 0
           },
           {
               id: 1,
               name: "Coopers Pale Ale",
               category: {
                   name: "Whacky Ale"
               },
               brewer: {
                   name: "Backyard Shed",
                   address: {
                       addressline1: "88 North East St",
                       addressline2: "",
                       state: "ACT",
                       postcode: 2000,
                       country: "Australia"
                   }
               },
               description: "Cloudy...",
               upVoteCount: 0
           }
       ];
       $scope.upVoteBeer = function(beer) {
            beer.upVoteCount++;
       }
       $scope.downVoteBeer = function(beer) {
           beer.upVoteCount--;
       }

   }
);
