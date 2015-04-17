app.controller("detailsViewController", function ($scope, $http, RunxBusAPI, $routeParams, PersistenceService) {
	//Initialize variables
	$scope.pageTitle		   = "Route's details for ROUTE NAME";
	$scope.pageRouteName	   = null;
	$scope.routeStops 		   = { "rows": [], "rowsAffected": 0 };
	$scope.routeDepartures     = { "rows": [], "rowsAffected": 0 };
	$scope.weekdayTimetables   = { "calendar": 'Weekday', "timetables": [] };
	$scope.saturdayTimetables  = { "calendar": 'Saturday', "timetables": [] };
	$scope.sundayTimetables    = { "calendar": 'Sunday', "timetables": [] };
	$scope.orderByField        = 'routeName';
	$scope.reverseSort         = false;
	$scope.totalTimetablesText = "Total timetables found";

	$scope.loadPageDetails = function() {
		//Load stored data for this page
		var filters = PersistenceService.getFilters();
		if (filters !== null && filters.clickedRoute !== null) {
			$scope.pageRouteName = filters.clickedRoute;
		}
	};

	$scope.loadRouteStops = function(id) {
		//Prepare route object to works with rest json
		var routeJsonPost = {
								params: {
									routeId: id
								}
							};

		RunxBusAPI.loadRouteStops(routeJsonPost).success(function(data, status) {
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

		RunxBusAPI.loadRouteDepartures(routeJsonPost).success(function(data, status) {

			$scope.routeDepartures =  data;
			$scope.organizeTimetablesByTypeOfDay();

		}).error(function(data, status) {
			console.log(data);
		});
	};

	$scope.organizeTimetablesByTypeOfDay = function() {
		//Bind timetables in arrays	
		angular.forEach($scope.routeDepartures.rows, function(value, key) {
   			switch (value.calendar) {
			    case 'WEEKDAY':
			        $scope.weekdayTimetables.timetables.push(value.time);
			        break;
			    case 'SATURDAY':
			        $scope.saturdayTimetables.timetables.push(value.time);
			        break;
			    case 'SUNDAY':
			        $scope.sundayTimetables.timetables.push(value.time);
			        break;
			}
		});
	};

	//Loads for details
	$scope.loadPageDetails();
	$scope.loadRouteStops($routeParams.id);
	$scope.loadRouteDepartures($routeParams.id);
});