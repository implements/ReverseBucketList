var app = angular.module('TravelPlansApplication', []);

app.controller('TravelPlansController', function($scope) {

    $scope.locations = [
        {
            title: 'Coast to Coast Road Trip in a Cadillac.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Road_trip',
            year: 2009
        },
        {
            title: 'Backpack Through Asia.',
            country: 'Vietnam / South Korea / Japan',
            url: 'https://en.wikipedia.org/wiki/Backpacking_(travel)',
            year: 2010
        },     
        {
            title: 'Go on a Interrail Trip',
            country: 'Netherlands / France / Spain / Italy / Germany / Czech Republic',
            url: 'https://en.wikipedia.org/wiki/Interrail',
            year: 2010
        },
        
    ]
});
