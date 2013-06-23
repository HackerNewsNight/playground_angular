'use strict';

beerApp.controller('BeerController',
   function BeerController($scope) {

       // Sample Beer
       $scope.snippet = "<span class='error'>Below is a list of beers.</span>"

       $scope.beer = {
           id: 1,
           name: "Lorum Ipsum",
           category: {
               name: "Duis sed ligula "
           },
           brewer: {
               name: "Etiam luctus",
               address: {
                   addressline1: "1 eleifend St",
                   addressline2: "",
                   state: "ullamcorper",
                   postcode: 9999,
                   country: "Mauris"
               }
           },
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed ligula vitae erat viverra molestie. Sed accumsan, est ac ullamcorper sodales, lorem eros aliquet risus,",
           images: [ "./img/beers/lipsum.gif"]
       };

       // Sample Beers List...
       $scope.beers = [
           {
               id: 2,
               name: "Sol's Hocus Pocus",
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
               upVoteCount: 0,
               images: [ "./img/beers/sol.jpg" ]
           },
           {
               id: 3,
               name: "Fat Yak",
               category: {
                   name: "Oil Ale"
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
               upVoteCount: 0,
               images: [ "./img/beers/fat_yak.jpg" ]
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
               upVoteCount: 0,
               images: [ "./img/beers/coopers.jpg" ]
           }
       ];
       $scope.beers.isVisible = true;

       /// Local Functions.
       $scope.toggle = function(obj){
          obj.isVisible = !obj.isVisible;
       };

       $scope.upVoteBeer = function(beer) {
           beer.upVoteCount++;
       };
       $scope.downVoteBeer = function(beer) {
           beer.upVoteCount--;
       };

       $scope.displayBeer = function(beer) {
           $scope.beer = beer;
       }
   }
);
