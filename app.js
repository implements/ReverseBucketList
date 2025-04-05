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
            title: 'Go on a Interrail Trip.',
            country: 'Netherlands / France / Spain / Monaco / Italy / Germany / Czech Republic',
            url: 'https://en.wikipedia.org/wiki/Interrail',
            year: 2011
        },
        {
            title: 'Attend a Full Moon Party.',
            country: 'Thailand',
            url: 'https://en.wikipedia.org/wiki/Full_Moon_Party',
            year: 2014
        },
        {
            title: 'Drink a Pint of Guinness in Dublin.',
            country: 'Ireland',
            url: 'https://en.wikipedia.org/wiki/Guinness',
            year: 2015
        },
        {
            title: 'Climb Mount Doom.',
            country: 'New Zealand',
            url: 'https://en.wikipedia.org/wiki/Mount_Ngauruhoe',
            year: 2016
        },
        {
            title: 'Bike One of the Most Dangerous Roads.',
            country: 'Taiwan',
            url: 'https://en.wikipedia.org/wiki/Suhua_Highway',
            year: 2016
        },
        {
            title: 'Fly Business Class.',
            country: 'Philippines',
            url: 'https://en.wikipedia.org/wiki/Business_class',
            year: 2020
        },
        {
            title: 'Drink Whisky in the Highlands.',
            country: 'Scotland',
            url: 'https://en.wikipedia.org/wiki/Scottish_Highlands',
            year: 2023
        },
        
    ]
});
