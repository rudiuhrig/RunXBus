/**
 * Routing definitions for this app 
 * @project RunXBus
 * @author Rudi Uhrig Neto [rudi.uhrig@gmail.com]
 * @since 17/04/2015
 * @copyright Rudi Uhrig Neto 2015
 */
app.config(function($routeProvider) {

	/**
	 * Routing for base path
	 * @example: RunXBus/index.html#/
	 */
	$routeProvider.when('/',
		{
			templateUrl: 'listView.html', 
		 	controller: 'listViewController'
	    });

	/**
	 * Routing for search path
	 * @example: RunXBus/index.html#/search
	 */
	$routeProvider.when('/search',
		{
			templateUrl: 'listView.html', 
		 	controller: 'listViewController'
	    });

	/**
	 * Route for route details path
	 * @example: RunXBus/index.html#/route/22
	 */
	$routeProvider.when('/route/:id',
		{
			templateUrl: 'detailsView.html', 
		 	controller: 'detailsViewController'
	    });
});
