/*
 Directive for menu html
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
/*
 Directive for footer html
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
