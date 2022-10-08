var myApp = angular.module('myApp', []);

myApp.run(function ($rootScope) {

    $rootScope.prodsToAdd = [];
    $rootScope.prodToAdd = [{
        pCode: '',
        pCost: '',
        hosName: '',
        pImage: '',
        pDisc: ''
    }];
})


myApp.controller('MainCtrl', function ($scope, $http) {


    // $scope.cat = 0;

    $scope.prods = [{
        pCode: '',
        pCost: '',
        hosName: '',
        pImage: '',
        pDisc: '',
        pCategory: ''
    }];


    $scope.getDataflatkathaA = function () {
        ("Got flat data");
        var getpCategory = [];

        $scope.productCategory = [{
            pCategory: "A Katha"

        }];
        getpCategory = $scope.productCategory;

        (getpCategory[0].pCategory);
        $http.post('/getProductCategory', getpCategory).success(function (gotflat) {
            //("Got Product Data");

            var p = [];
            //double parse the string for array
            p = JSON.parse(gotflat);
            p = JSON.parse(p);
            $scope.prods = p;
            //       $scope.cat = 1;

        });


    }

    $scope.getDataflatkathaB = function () {
        ("Got flat data");
        var getpCategory = [];

        $scope.productCategory = [{
            pCategory: "B Katha"

        }];
        getpCategory = $scope.productCategory;

        (getpCategory[0].pCategory);
        $http.post('/getProductCategory', getpCategory).success(function (gotflat) {
            //("Got Product Data");

            var p = [];
            //double parse the string for array
            p = JSON.parse(gotflat);
            p = JSON.parse(p);
            $scope.prods = p;
            //       $scope.cat = 1;

        });


    }


    $scope.add = function (index) {
        //    (index);
        //        $scope.prodsSold.splice(index, 1);

        $scope.prodsToAdd.splice(0, 1);

        $scope.prodsToAdd.push(angular.copy($scope.prods[index]));

    }



    $scope.store = function () {

        var prodString = "something";
        prodString = JSON.stringify($scope.prodsToAdd);

        document.getElementById('products').value = prodString;
    }

});

