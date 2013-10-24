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

        // Show a bike if either
        // (1) The rider wants a bike for men and the bikes fits men
        // (2) The rider wants a bike for women and the bikes fits women
        genderFit = ( $scope.riderMale && bike.male ) ||
            ( $scope.riderFemale && bike.female )

        return riderHeight >= riderHeightLowerBound &&
            riderHeight <= riderHeightUpperBound &&
            genderFit
    }

    /* Start off accepting male and female bikes */
    $scope.riderMale = true;
    $scope.riderFemale = true;

    $scope.setRiderMale = function() {
        $scope.riderMale = true;
        $scope.riderFemale = false;        
    }

    $scope.setRiderFemale = function() {
        $scope.riderMale = false;
        $scope.riderFemale = true;        
    }

}])