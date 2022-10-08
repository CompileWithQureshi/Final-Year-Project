var myApp = angular.module('myApp', []);

myApp.run(function ($rootScope) {

    $rootScope.prodsToAdd = [];
})



myApp.controller('MainCtrl', function ($scope, $http) {


    $scope.imageName = "";

    $scope.add = function (prodToAdd) {

        $scope.prodsToAdd.push(angular.copy(prodToAdd));
    }

    $scope.store = function () {
        var prodString = "something";
        prodString = JSON.stringify($scope.prodsToAdd);

        document.getElementById('prods').value = prodString;
        //alert("Proceed to billing");

    }


    $scope.submitData = function () {
        ('submit Data');

        $scope.bookingflatdet = [{
            pCode: document.getElementById('pCode').value,
            pCost: document.getElementById('pCost').value,
            hosName: document.getElementById('hosName').value,
            pCategory: document.getElementById('pCategory').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            addr: document.getElementById('addr').value

        }];

        var prods = [];
        prods = $scope.bookingflatdet;
        ("customer details to add");
        (prods[0].pCode);

        $http.post('/addBookingApart', prods).success(function (prods) {
            alert("Submitted Data");
        });
    }



    $scope.getData = function () {

        var prodStr = document.getElementById('text').value;

        try {
            prodArr = JSON.parse(prodStr);

        }
        catch (e) {
            alert(e.message);
        }

        $scope.prodsToAdd = prodArr;

        document.getElementById('pCode').value = $scope.prodsToAdd[0].pCode;
        document.getElementById('pCost').value = $scope.prodsToAdd[0].pCost;
        document.getElementById('hosName').value = $scope.prodsToAdd[0].hosName;
        document.getElementById('pCategory').value = $scope.prodsToAdd[0].pCategory;

    }


});
