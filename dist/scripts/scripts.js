var payss = angular.module("payss.controllers", []);
payss.controller("homeCtrl",['$scope', function($scope) {
    $scope.hello = "hello from the angular js app.js file"


    $(function() {
        $('#ri-grid').gridrotator({
            rows: 4,
            columns: 8,
            animType: 'random',
            animSpeed: 1200,
            interval: 1200,
            step: 'random',
            preventClick: false,
            maxStep: 2,
            w992: {
                rows: 5,
                columns: 4
            },
            w768: {
                rows: 6,
                columns: 3
            },
            w480: {
                rows: 8,
                columns: 3
            },
            w320: {
                rows: 5,
                columns: 4
            },
            w240: {
                rows: 6,
                columns: 4
            }
        });

    });


}]);

payss.controller("dashboardCtrl", ['$scope','$http', function($scope, $http){
    $scope.hello = 'Hello from the template controller'
}])

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