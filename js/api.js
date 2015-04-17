app.factory("RunxBusAPI", function($http) {

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

	return {
		searchRoutes: _searchRoutes,
		loadRouteStops: _loadRouteStops,
		loadRouteDepartures: _loadRouteDepartures
	}
});