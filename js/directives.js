/**
 * Directives for this app 
 * @project RunXBus
 * @author Rudi Uhrig Neto [rudi.uhrig@gmail.com]
 * @since 17/04/2015
 * @copyright Rudi Uhrig Neto 2015
 */

/**
 * Directive for menu html
 * @return: Object with html to be rendered
 */
app.directive("menu", function() {
	return {
		templateUrl: "menu.html",
		replace: true,
		restrict: "EA",
		transclude: true,
		scope: {
			titulo: "@"
		}
	};
});

/**
 * Directive for footer html
 * @return: Object with html to be rendered
 */
app.directive("footer", function() {
	return {
		templateUrl: "footer.html",
		replace: true,
		restrict: "EA",
		transclude: true,
		scope: {
			titulo: "@"
		}
	};
});

/**
 * Directive for loading html
 * @return: Object with html to be rendered
 */
app.directive("loading", function() {
	return {
		templateUrl: "loading.html",
		replace: true,
		restrict: "EA",
		transclude: true,
		scope: {
			titulo: "@"
		}
	};
});
