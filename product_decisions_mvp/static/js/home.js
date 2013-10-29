/*
Keep all parts of the application together for the moment.

http://docs.angularjs.org/tutorial/step_02

http://docs.angularjs.org/tutorial/step_11
*/

// Create a service for interacting with Bike data.
pdm.factory('Bike', ['$resource', function ($resource) {

    return $resource('api/bikes/:bikeId.json', {}, {

        query: {
            method: 'GET',
            params: {
                bikeId: 'all'
            },
            isArray: true
        }

    })

}])

// Create a controller for the bike search 
pdm.controller('BikeSearchController', ['$scope', 'Bike', function ($scope, Bike) {

    $scope.bikes = Bike.query()

    $scope.displayBike = function( bike ) {
        /*
         * Display bike is (a) filter has been applied and bike matches criteria,
         * (b) filter has been applied and no bikes match the criteria or (c)
         * (c) filter has not been applied
        */

        if ( $scope.filteringBegun ) {
            // TODO: implement case b
            return $scope.matchesRider(bike);
        } else {
            return true;
        }

    }

    $scope.matchesRider = function( bike ) {
        /*
         * Returns True if bike matches rider criteria.
        */

        riderHeight = parseInt($scope.riderHeightFeet)*12 + parseInt($scope.riderHeightInches)

        heightFit = riderHeight >= bike.riderHeightLowerTotalInches &&
            riderHeight <= bike.riderHeightUpperTotalInches

        // Show a bike if either
        // (1) The rider wants a bike for men and the bikes fits men
        // (2) The rider wants a bike for women and the bikes fits women
        genderFit = ( $scope.riderMale && bike.male ) ||
            ( $scope.riderFemale && bike.female )

        return heightFit && genderFit
    }

    // Start off accepting male and female bikes
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

    // Interface should be different before the user begins to input their 
    // own needs and afterwards.
    $scope.filteringBegun = false;

}])