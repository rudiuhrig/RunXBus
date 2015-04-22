/**
 * API methods for restful web services 
 * @project RunXBus
 * @author Rudi Uhrig Neto [rudi.uhrig@gmail.com]
 * @since 17/04/2015
 * @copyright Rudi Uhrig Neto 2015
 */
 //good use of angular's factory
app.factory("RunxBusAPI", ['$http', function($http) {

	//Prepare Basic Auth and custom header
	//consider moving the API key to config file and add it to the .gitignore file
	//is not safe keep that kind of information in the repository
	$http.defaults.headers.common['Authorization'] = 'Basic V0tENE43WU1BMXVpTThWOkR0ZFR0ek1MUWxBMGhrMkMxWWk1cEx5VklsQVE2OA==';
	$http.defaults.headers.post['X-AppGlu-Environment'] = 'staging';

	/**
	* Prepare params to works with rest json
	* @param {string} keyParam
	* @param {string} keyParam
	* @returns {string} Json
	*/
	var _prepareJsonPost = function(keyParam, valueParam) {
        var jsonPost = {
            params: {
        				//this sound wrong to me. I don't even think it's valid syntax
        				//I've tried to evaluate it using Chrome's console and got a SyntaxError
                [keyParam]: valueParam
            }
        };
        return jsonPost;
    };

	/**
	* Execute post request to search routes
	* @param {string} stopName
	* @returns {string} Json
	*/
	var _searchRoutes = function(stopName) {
		var routeParams = _prepareJsonPost('stopName', stopName);
		//would extract the common part of the URL to a constant
		return $http.post("https://api.appglu.com/v1/queries/findRoutesByStopName/run", routeParams);
	};
	
	/**
	* Execute post request to load route stops
	* @param {int} routeId
	* @returns {string} Json
	*/
	var _loadRouteStops = function(routeId) {
		var routeParams = _prepareJsonPost('routeId', routeId);
		return $http.post("https://api.appglu.com/v1/queries/findStopsByRouteId/run", routeParams);
	};
	
	/**
	* Execute post request to load route departures
	* @param {int} routeId
	* @returns {string} Json
	*/
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