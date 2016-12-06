app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl : "pages/main.html"
        })
        .when("/audios1", {
            templateUrl : "pages/audios1.html",
            // controller:'myAudios'
        })
        .when("/audios/:id", {
            templateUrl : "pages/audio.html",
            // controller:'mySongs'
        })
        .otherwise({
            templateUrl : "pages/audios2.html"
        });
    // use the HTML5 History API
    $locationProvider.html5Mode(true);

});