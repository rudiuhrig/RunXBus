app.controller("itemCtrl", function ($scope, $http, runxbusAPI, $routeParams) {
	$scope.item = null;

	$scope.carregarItem = function(id) {
		runxbusAPI.carregarItem(id).success(function(data, status) {
			$scope.item =  data;
		}).error(function(data, status) {
			console.log(data);
		});
	};

	$scope.carregarItem($routeParams.id);
});