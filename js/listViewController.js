app.controller("listViewController", function ($scope, $http, RunxBusAPI, PersistenceService) {
	//Initialize variables
	$scope.appTitle     = 'Floripa - Bus informations';
	$scope.routes       = { "rows": [],	"rowsAffected": 0 };
	$scope.orderByField = 'routeName';
	$scope.reverseSort  = false;

	$scope.searchRoute = function (route) {
		//Prepare route object to works with rest json
		var routeJsonPost = {
								params: {
									stopName: "%" + route.stopName + "%"
								}
							};

		RunxBusAPI.searchRoutes(routeJsonPost).success(function(data, status) {

			$scope.routes = data;

			//Store data for back to this page
			PersistenceService.persist(data);

		}).error(function(data, status) {
			console.log(data);
		});


		//Reset the state of form fields tu future validations
		$scope.searchForm.$setPristine();
	};

	$scope.loadPreviousSearch = function() {
		//Load stored data for this page
		var previousRoutes = PersistenceService.get();
		if (previousRoutes !== null) {
			$scope.routes = previousRoutes;
		}
	};

	$scope.loadPreviousSearch();
});