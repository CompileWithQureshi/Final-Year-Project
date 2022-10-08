var myApp = angular.module('myApp', []);

myApp.run(function ($rootScope) {



})


myApp.controller('MainCtrl', function ($scope, $http) {


    $scope.getData = function () {
        ("flat booking");
        $http.post('/getFlatBooking').success(function (gotOrder) {
            ("Got Order Data");
            var p = [];
            //double parse the string for array
            p = JSON.parse(gotOrder);
            p = JSON.parse(p);
            $scope.orders = p;
        });
    }
});

