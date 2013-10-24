/*
Keep all parts of the application together for the moment.

http://docs.angularjs.org/tutorial/step_02
*/

pdm.controller('BikeSearchController', ['$scope', function ($scope) {

    $scope.bikes = [
        {
            title: "Purple Vintage Road Bike", 
            price: 400,
            rider_height_lower_feet: 5,
            rider_height_lower_inches: 10,
            rider_height_upper_feet: 6,
            rider_height_upper_inches: 0,
            buy_url: "http://www.ebay.co.uk/itm/FALCON-58CM-VINTAGE-ROAD-BIKE-REYNOLDS-531-5-SPEED-PURPLE-/300997251850"
        },
        {
            title: "Purple Vintage Road Bike", 
            price: 400,
            rider_height_lower_feet: 5,
            rider_height_lower_inches: 10,
            rider_height_upper_feet: 6,
            rider_height_upper_inches: 0,
            buy_url: "http://www.ebay.co.uk/itm/FALCON-58CM-VINTAGE-ROAD-BIKE-REYNOLDS-531-5-SPEED-PURPLE-/300997251850"
        },
        {
            title: "Purple Vintage Road Bike", 
            price: 400,
            rider_height_lower_feet: 5,
            rider_height_lower_inches: 10,
            rider_height_upper_feet: 6,
            rider_height_upper_inches: 0,
            buy_url: "http://www.ebay.co.uk/itm/FALCON-58CM-VINTAGE-ROAD-BIKE-REYNOLDS-531-5-SPEED-PURPLE-/300997251850"
        }
    ];

}])