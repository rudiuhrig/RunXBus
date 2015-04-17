app.controller("listViewController", ['$scope', 'RunxBusAPI', 'PersistenceService', function ($scope, RunxBusAPI, PersistenceService) {
	//Initialize variables
	$scope.appTitle     = 'Floripa - Bus informations';
	$scope.routes       = { "rows": [],	"rowsAffected": 0 };
	$scope.orderByField = 'routeName';
	$scope.reverseSort  = false;

	$scope.searchRoute = function(stopName) {
		var stringSearch = "%" + stopName + "%";
		RunxBusAPI.searchRoutes(stringSearch).success(function(data, status) {
			$scope.routes = data;

			//Store data for back to this page
			PersistenceService.persist(data);

		}).error(function(data, status) {
			console.log(data);
		});

		//Reset the state of form fields tu future validations
		$scope.searchForm.$setPristine();
	};

	$scope.setFilters = function(clickedRoute) {
		var searchFilters = { 
							  'searchedStopName': $scope.stopName, 
							  'clickedRoute': clickedRoute.shortName + " - " + clickedRoute.longName 
							};
		PersistenceService.persistFilters(searchFilters);
	}

	$scope.loadPreviousSearch = function() {
		//Load stored data for this page
		var previousStopName = PersistenceService.getFilters();
		if (previousStopName !== null && ( (previousStopName.searchedStopName !== null) || (previousStopName.searchedStopName !== 'undefined') ) ) {
			$scope.stopName = previousStopName.searchedStopName;
		}

		var previousRoutes = PersistenceService.get();
		if (previousRoutes !== null) {
			$scope.routes = previousRoutes;
		}
	};

	$scope.loadPreviousSearch();
}]);