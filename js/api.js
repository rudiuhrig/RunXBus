app.factory("RunxBusAPI", ['$http', function($http) {

	//Prepare Basic Auth and custom header
	$http.defaults.headers.common['Authorization'] = 'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==';
	$http.defaults.headers.post['X-AppGlu-Environment'] = 'staging';

	//Prepare params to works with rest json
	var _prepareJsonPost = function(keyParam, valueParam) {
        var routeJsonPost = {
                    params: {
                        [keyParam]: valueParam
                    }
                };
        return routeJsonPost;
    };

	var _searchRoutes = function(stopName) {
		var routeParams = _prepareJsonPost('stopName', stopName);
		return $http.post("https://api.appglu.com/v1/queries/findRoutesByStopName/run", routeParams);
	};
	
	var _loadRouteStops = function(routeId) {
		var routeParams = _prepareJsonPost('routeId', routeId);
		return $http.post("https://api.appglu.com/v1/queries/findStopsByRouteId/run", routeParams);
	};
	
	var _loadRouteDepartures = function(routeId) {
		var routeParams = _prepareJsonPost('routeId', routeId);
		return $http.post("https://api.appglu.com/v1/queries/findDeparturesByRouteId/run", routeParams);
	};

	return {
		searchRoutes: _searchRoutes,
		loadRouteStops: _loadRouteStops,
		loadRouteDepartures: _loadRouteDepartures
	}
}]);