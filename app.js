var app = angular.module('TravelPlansApplication', []);

app.controller('TravelPlansController', function($scope) {

    $scope.locations = [
        {
            title: 'Go Skydiving.',
            country: 'Denmark / New Zealand',
            url: 'https://en.wikipedia.org/wiki/Parachuting',
            year: 2009
        },
        {
            title: 'Do a Coast to Coast Road Trip in a Cadillac.',
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
            title: 'Go to Times Square on New Year\'s Eve.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Times_Square_Ball',
            year: 2012
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
            title: 'Swim With Dolphins.',
            country: 'New Zealand',
            url: 'https://en.wikipedia.org/wiki/Christchurch',
            year: 2016
        },
        {
            title: 'Bike One of the Most Dangerous Roads.',
            country: 'Taiwan',
            url: 'https://en.wikipedia.org/wiki/Suhua_Highway',
            year: 2016
        },
        {
            title: 'Visit the Hottest Place on Earth.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Death_Valley',
            year: 2019
        },
        {
            title: 'Climb a Volcano.',
            country: 'Indonesia',
            url: 'https://en.wikipedia.org/wiki/Ijen',
            year: 2019
        },  
        {
            title: 'Swim the Dead Sea.',
            country: 'Israel',
            url: 'https://en.wikipedia.org/wiki/Dead_Sea',
            year: 2019
        },
        {
            title: 'Stay at a 5 Star Luxury Hotel.',
            country: 'Philippines',
            url: 'https://en.wikipedia.org/wiki/Edsa_Shangri-La,_Manila',
            year: 2020
        },
        {
            title: 'Fly Business Class.',
            country: 'Philippines',
            url: 'https://en.wikipedia.org/wiki/Business_class',
            year: 2020
        },
        {
            title: 'Learn to Surf.',
            country: 'Portugal',
            url: 'https://en.wikipedia.org/wiki/Mafra,_Portugal',
            year: 2020
        },
        {
            title: 'Visit Rivendell.',
            country: 'Switzerland',
            url: 'https://en.wikipedia.org/wiki/Lauterbrunnen',
            year: 2022
        },
        {
            title: 'Board Down an Olympic Black Slope.',
            country: 'France',
            url: 'https://en.wikipedia.org/wiki/Val_Thorens',
            year: 2023
        },
        {
            title: 'Bike the Thakhek Loop.',
            country: 'Laos',
            url: 'https://solotravellerontour.com/motorbike-thakhek-loop/',
            year: 2023
        },
        {
            title: 'Drink Whisky in the Highlands.',
            country: 'Scotland',
            url: 'https://en.wikipedia.org/wiki/Scottish_Highlands',
            year: 2023
        },
        
    ]
});
