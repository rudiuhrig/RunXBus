RunXBus
=====
RunXBus is a simple app which searches some routes and timetables of Florianópolis's public transportation.
This appplication is part of ArcTouch's Code Testing challenge.


Important App Files
---------------------------
* www/index.html
* www/views/detailsView.html
* www/views/listView.html
* www/views/partials/loading.html 
* www/views/partials/menu.html
* www/views/partials/footer.html 
* www/js/api.js
* www/js/detailsViewController.js
* www/js/directives.js
* www/js/initApp.js
* www/js/listViewController.js
* www/js/routes.js
* www/js/services.js
* www/css/bootstrap.min.css 
* www/css/custom.css
* www/libs/angular-1.2.22/*.*
* screenshots/*.*


Info and Run
------------------------------
This application runs in the web browser. 
It is based in HTML5, CSS3 and JavaScript powered by AngularJS and based on Restful Webservices.
The folders an files structures are base in PhoneGap/Cordova project.

You can just download the files and run www/index.html from your machine.

See the screenshots to check the app frontend on Mobile and PC.

OBS.: At momment this app is compatible only with Firefox browser (Mobile and PC).

Observations
------------------
1. In general there's no optimizations for mobile like additional CSS rules, libraries or Cordova's project configurations.
2. The use of AngularJS was good. There was no incorrect usage or antipatterns found.
3. It worked for once, the first time I tested it on iOS simulator. After that I've tried to run it on my iPhone 5s and again on iOS simulators (4s and 5s). It was not possible to get search results for any search, even the ones that have worked before.
4. More observations on the pull request for the original repository, as comments inside the code.

