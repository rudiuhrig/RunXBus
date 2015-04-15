app.config(function($routeProvider) {

	//RunXBus/index.html#/
	$routeProvider.when('/',
		{
			templateUrl: 'listView.html', 
		 	controller: 'listViewController'
	    });

	//RunXBus/index.html#/search
	$routeProvider.when('/search',
		{
			templateUrl: 'listView.html', 
		 	controller: 'listViewController'
	    });

	//RunXBus/index.html#/route/1
	$routeProvider.when('/route/:id',
		{
			templateUrl: 'detailsView.html', 
		 	controller: 'detailsViewController'
	    });
});
