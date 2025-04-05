var app = angular.module('TravelPlansApplication', []);

app.controller('TravelPlansController', function($scope) {

    $scope.locations = [
        {
            title: 'Do a Coast to Coast Road Trip in a Cadillac.',
            country: 'United States',
            url: 'https://en.wikipedia.org/wiki/Road_trip',
            year: 2009
        },
        
    ]
});
