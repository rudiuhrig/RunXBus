/**
 * Controller to manipulate the details view 
 * @project RunXBus
 * @author Rudi Uhrig Neto [rudi.uhrig@gmail.com]
 * @since 17/04/2015
 * @copyright Rudi Uhrig Neto 2015
 */
app.controller("detailsViewController", ['$scope', 'RunxBusAPI', 'PersistenceService', '$routeParams', function ($scope, RunxBusAPI, PersistenceService, $routeParams) {
	//Initialize variables
	$scope.pageTitle		   = "Route's details for ";
	$scope.pageRouteName	   = null;
	$scope.routeStops 		   = { "rows": [], "rowsAffected": 0 };
	$scope.routeDepartures     = { "rows": [], "rowsAffected": 0 };
	$scope.weekdayTimetables   = { "calendar": 'Weekday', "timetables": [] };
	$scope.saturdayTimetables  = { "calendar": 'Saturday', "timetables": [] };
	$scope.sundayTimetables    = { "calendar": 'Sunday', "timetables": [] };
	$scope.totalTimetablesText = "Total timetables found";
	$scope.loadingRouteStops   = false;
	$scope.loadingRouteDept    = false;
	$scope.routeStopsNotFound  = false;
	$scope.routeDeptNotFound   = false;

	/**
	 * Load stored data and details for this page
	 * @return: void
	 */
	$scope.loadPageDetails = function() {
		var filters = PersistenceService.getFilters();
		if (filters !== null && filters.clickedRoute !== null) {
			$scope.pageTitle = $scope.pageTitle + filters.clickedRoute;
			$scope.pageRouteName = filters.clickedRoute;
		}

		$scope.loadRouteStops($routeParams.id);
		$scope.loadRouteDepartures($routeParams.id);
	};

	/**
	 * Perform the searching route stops by routeId on RunxBusAPI
	 * @param {int} routeId
	 * @return: void
	 */
	$scope.loadRouteStops = function(routeId) {
		$scope.loadingRouteStops  = true;
		$scope.routeStopsNotFound = false;

		RunxBusAPI.loadRouteStops(routeId).success(function(data, status) {
			$scope.routeStops =  data;
			
			if (data.rows.length <= 0) {
				$scope.routeStopsNotFound = true;
			}
		}).error(function(data, status) {
			console.log(data);
		}).finally(function() { //good use of finally clause to control loading information
			$scope.loadingRouteStops = false;
		});
	};

	/**
	 * Perform the searching route departures by routeId on RunxBusAPI
	 * and organize result in timetables
	 * @param {int} routeId
	 * @return: void
	 */
	$scope.loadRouteDepartures = function(routeId) {
		$scope.loadingRouteDept  = true;
		$scope.routeDeptNotFound = false;

		RunxBusAPI.loadRouteDepartures(routeId).success(function(data, status) {
			$scope.routeDepartures =  data;
			$scope.organizeTimetablesByTypeOfDay();

			if (data.rows.length <= 0) {
				$scope.routeDeptNotFound = true;
			}
		}).error(function(data, status) {
			console.log(data);
		}).finally(function() {
			$scope.loadingRouteDept = false;
		});
	};

	/**
	 * Organize results in timetables by tipe of the day -
	 * weekday, saturday and sunday
	 * @return: void
	 */
	$scope.organizeTimetablesByTypeOfDay = function() {
		angular.forEach($scope.routeDepartures.rows, function(value, key) {
			//Bind timetables in arrays	
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

	$scope.loadPageDetails();
}]);