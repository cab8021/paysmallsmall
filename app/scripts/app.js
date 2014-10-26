angular.module("payss", [
    'payss.controllers',
    'ngResource',
    'ngRoute'
]).config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "homeCtrl"
        }).
        when("/dashboard", {
            templateUrl: "partials/dashboard.html",
            controller: "dashboardCtrl"
        } ).otherwise({redirectTo: '/'});
}]);