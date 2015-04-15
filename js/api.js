app.factory("runxbusAPI", function($http) {

	//Prepare Basic Auth and custom header
	$http.defaults.headers.common['Authorization'] = 'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==';
	$http.defaults.headers.post['X-AppGlu-Environment'] = 'staging';

	var _searchRoutes = function(routeParams) {
		return $http.post("https://api.appglu.com/v1/queries/findRoutesByStopName/run", routeParams);
	};
	
	var _loadRouteStops = function(routeParams) {
		return $http.post("https://api.appglu.com/v1/queries/findStopsByRouteId/run", routeParams);
	};
	
	var _loadRouteDepartures = function(routeParams) {
		return $http.post("https://api.appglu.com/v1/queries/findDeparturesByRouteId/run", routeParams);
	};

	var _carregarItems = function() {
		return $http.get("https://devweb.nexxera.com/pedidosweb/cardapio");
	};

	var _carregarPedidos = function() {
		return $http.get("https://devweb.nexxera.com/pedidosweb/pedidos");
	};

	var _salvarPedido = function(pedido) {
		return $http.post("https://devweb.nexxera.com/pedidosweb/pedidos", pedido);
	};

	var _carregarItem = function(id) {
		return $http.get("https://devweb.nexxera.com/pedidosweb/item/" + id);
	};

	return {
		searchRoutes: _searchRoutes,
		loadRouteStops: _loadRouteStops,
		loadRouteDepartures: _loadRouteDepartures,

		carregarPedidos: _carregarPedidos,
		salvarPedido: _salvarPedido,
		carregarItems: _carregarItems,
		carregarItem: _carregarItem
	}
});