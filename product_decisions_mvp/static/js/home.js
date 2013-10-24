/*
Keep all parts of the application together for the moment.

http://docs.angularjs.org/tutorial/step_02
*/

pdm.controller('BikeSearchController', ['$scope', function ($scope) {

    $scope.bikes = [
        {
            title: "Purple Vintage Road Bike", 
            price: 400,
            riderHeightLowerFeet: 5,
            riderHeightLowerInches: 10,
            riderHeightUpperFeet: 6,
            riderHeightUpperInches: 0,
            buyUrl: "http://www.ebay.co.uk/itm/FALCON-58CM-VINTAGE-ROAD-BIKE-REYNOLDS-531-5-SPEED-PURPLE-/300997251850",
            male: true,
            female: true
        },
        {
            title: "Purple Vintage Road Bike", 
            price: 300,
            riderHeightLowerFeet: 5,
            riderHeightLowerInches: 10,
            riderHeightUpperFeet: 6,
            riderHeightUpperInches: 0,
            buyUrl: "http://www.ebay.co.uk/itm/FALCON-58CM-VINTAGE-ROAD-BIKE-REYNOLDS-531-5-SPEED-PURPLE-/300997251850",
            male: true,
            female: true
        },
        {
            title: "Purple Vintage Road Bike", 
            price: 200,
            riderHeightLowerFeet: 5,
            riderHeightLowerInches: 10,
            riderHeightUpperFeet: 6,
            riderHeightUpperInches: 0,
            buyUrl: "http://www.ebay.co.uk/itm/FALCON-58CM-VINTAGE-ROAD-BIKE-REYNOLDS-531-5-SPEED-PURPLE-/300997251850",
            male: true,
            female: true
        }
    ];

    $scope.matchesRider = function( bike ) {
        /*
         * Returns True if bike matches rider criteria.
        */

        riderHeight = parseInt($scope.riderHeightFeet)*12 + parseInt($scope.riderHeightInches)
        riderHeightLowerBound = bike.riderHeightLowerFeet*12 + bike.riderHeightLowerInches
        riderHeightUpperBound = bike.riderHeightUpperFeet*12 + bike.riderHeightUpperInches

        console.log(riderHeight)

        return riderHeight >= riderHeightLowerBound &&
            riderHeight <= riderHeightUpperBound &&
            bike.male &&
            bike.female
    }

}])