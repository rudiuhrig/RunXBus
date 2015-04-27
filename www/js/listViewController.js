/**
 * Controller to manipulate the list view 
 * @project RunXBus
 * @author Rudi Uhrig Neto [rudi.uhrig@gmail.com]
 * @since 17/04/2015
 * @copyright Rudi Uhrig Neto 2015
 */
app.controller("listViewController", ['$scope', 'RunxBusAPI', 'PersistenceService', function ($scope, RunxBusAPI, PersistenceService) {
	//Initialize variables
	$scope.appTitle       = 'Floripa - Bus informations';
	$scope.routes         = { "rows": [],	"rowsAffected": 0 };
	$scope.loading        = false;
	$scope.routesNotFound = false;

	/**
	 * Perform the searching route by stop name on RunxBusAP
	 * and stores data to be used across app
	 * @param {string} stopName
	 * @return: void
	 */
	$scope.searchRoute = function(stopName) {
		$scope.loading 		  = true;
		$scope.routesNotFound = false;
		var stringSearch      = "%" + stopName + "%";

		//Call API search routes method
		RunxBusAPI.searchRoutes(stringSearch).success(function(data, status) {
			$scope.routes = data;

			//perfome persistence of data without check it's state or consistency
			//Stores data for back to this page
			PersistenceService.persist(data);

			if (data.rows.length <= 0) {
				$scope.routesNotFound = true;
			}
		}).error(function(data, status) {
			console.log(data);
		}).finally(function() {
			$scope.loading = false;
		});

		//Reset the state of form field to future validations
		$scope.searchForm.$setPristine();
	};

	/**
	 * Set filters for next page
	 * @param {string} clickedRoute
	 * @return: void
	 */
	$scope.setFilters = function(clickedRoute) {
		var searchFilters = { 
			'searchedStopName': $scope.stopName, 
			'clickedRoute': clickedRoute.shortName + " - " + clickedRoute.longName 
		};
		PersistenceService.persistFilters(searchFilters);
	};

	/**
	 * Load stored previous data for this page
	 * @return: void
	 */
	$scope.loadPreviousSearch = function() {
		//Verify filters
		var previousStopName = PersistenceService.getFilters();
		if (previousStopName !== null && 
				( (previousStopName.searchedStopName !== null) || (previousStopName.searchedStopName !== 'undefined') ) ) {
			$scope.stopName = previousStopName.searchedStopName;
		}

		//Verify result data
		var previousRoutes = PersistenceService.get();
		if (previousRoutes !== null) {
			$scope.routes = previousRoutes;
		}
	};

	$scope.loadPreviousSearch();
}]);