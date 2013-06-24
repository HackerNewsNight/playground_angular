'use strict';

/* BEER APP Filters */
beerApp.filter('abv', function () {
    return function (abv) {
        var feedback;
        switch (true) {
            case abv <= 4:
                feedback = "Light Beer ";
                break;
            case abv > 4 && abv <= 8:
                feedback = "Watch your limits!";
                break;
            case abv > 8 && abv <= 11:
                feedback = "You should consider quiting";
                break;
            case abv > 11:
                feedback = "Your going to die!";
                break;
        }

        return abv + " [" + feedback + "]"
    };
});