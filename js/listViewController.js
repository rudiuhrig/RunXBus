app.controller("listViewController", function ($scope, $http, runxbusAPI) {
	$scope.appTitle = 'Floripa - Bus informations';
	$scope.routes   = {
		"rows": [],
    	"rowsAffected": 0
	};
	$scope.orderByField = 'routeName';
	$scope.reverseSort  = false;

	$scope.items     	= [];

	$scope.searchRoute = function (route) {
		//Prepare route object to works with rest json
		var routeJsonPost = {
								params: {
									stopName: "%" + route.stopName + "%"
								}
							};

		runxbusAPI.searchRoutes(routeJsonPost).success(function(data, status) {

			$scope.routes = data;

			//$scope.carregarPedidos();

		}).error(function(data, status) {
			console.log(data);
		});


		//Reset the state of form fields tu future validations
		$scope.searchForm.$setPristine();
	};

	$scope.carregarItens = function() {
		runxbusAPI.carregarItems().success(function(data, status) {
			$scope.items =  data;
		}).error(function(data, status) {
			console.log(data);
		});
	};

	$scope.carregarPedidos = function() {
		runxbusAPI.carregarPedidos().success(function(data, status) {
			$scope.routes = data;
			//@TODO: foreach pedidos para calcular total dos pedidos
			//$scope.total
		}).error(function(data, status) {
			console.log(data);
		});
	};

	//$scope.carregarItens();
	//$scope.carregarPedidos();
});