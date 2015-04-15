app.controller("detailsViewController", function ($scope, $http, runxbusAPI, $routeParams) {
	$scope.routeStops = {
		"rows": [],
    	"rowsAffected": 0
	};
	$scope.routeDepartures = {
		"rows": [],
    	"rowsAffected": 0
	};
	$scope.orderByField    = 'routeName';
	$scope.reverseSort     = false;
	$scope.orderByFieldDep = 'departureTime';
	$scope.reverseSortDep  = false;

	$scope.loadRouteStops = function(id) {
		//Prepare route object to works with rest json
		var routeJsonPost = {
								params: {
									routeId: id
								}
							};

		runxbusAPI.loadRouteStops(routeJsonPost).success(function(data, status) {
			$scope.routeStops =  data;
		}).error(function(data, status) {
			console.log(data);
		});
	};

	$scope.loadRouteDepartures = function(id) {
		//Prepare route object to works with rest json
		var routeJsonPost = {
								params: {
									routeId: id
								}
							};

		runxbusAPI.loadRouteDepartures(routeJsonPost).success(function(data, status) {
			$scope.routeDepartures =  data;
		}).error(function(data, status) {
			console.log(data);
		});
	};

	//Loads for details
	$scope.loadRouteStops($routeParams.id);
	$scope.loadRouteDepartures($routeParams.id);
});