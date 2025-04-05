var app = angular.module('TravelPlansApplication', []);

app.controller('TravelPlansController', function($scope) {

    $scope.locations = [
        {
            title: 'Walk the Great Wall.',
            country: 'China',
            url: 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
            year: 2018
        },
        
    ]
});
