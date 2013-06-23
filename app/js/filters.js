'use strict';

beerApp.filter('abv', function () {
    return function(abv) {
        switch(true) {
            case abv <= 4:
                return "Light Beer ";
            case abv > 4 && abv <=8:
                return "Watch your limits!";
            case abv > 8 && abv <= 11:
                return "You should consider quiting";
            case abv > 11:
                return "Your going to die!"
        };
    };
});
