var payss = angular.module("payss.controllers", []);
payss.controller("homeCtrl",['$scope', function($scope) {
    $scope.hello = "hello from the angular js app.js file"
   $scope.login = function(){
       $("#login").leanModal();
   }

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


//    modal dialogue script
    function showPassword() {

        var key_attr = $('#key').attr('type');

        if(key_attr != 'text') {

            $('.checkbox').addClass('show');
            $('#key').attr('type', 'text');

        } else {

            $('.checkbox').removeClass('show');
            $('#key').attr('type', 'password');

        }

    }

}]);

payss.controller("dashboardCtrl", ['$scope','$http', function($scope, $http){
    $scope.hello = 'Hello from the template controller'
}]);

//login ctrl
payss.controller('loginCtrl', ['$scope', '$http', function($scope, $http){
    $scope.hello = 'Hello from the login ctrl controller'
}])


//user profile ctrl
payss.controller('userProfileCtrl', ['$scope', '$http', function($scope, $http){
    $scope.hello = 'Hello from the login ctrl controller'
}])
