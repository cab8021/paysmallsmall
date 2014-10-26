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
        } ).
        when("/signup", {
            templateUrl: "partials/login.html",
            controller: "loginCtrl"
        } ).
        when("/user-profile", {
            templateUrl: "partials/user-profile.html",
            controller: "userProfileCtrl"
        } ).otherwise({redirectTo: '/'});
}]);