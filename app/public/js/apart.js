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
        //("Proceed to billing");

    }

    $scope.showImage = function () {
        var name = document.getElementById('fileInput');
        $scope.imageName = name.files.item(0).name;
        document.getElementById('pImage').value = name.files.item(0).name;


    }

    $scope.submitData = function () {
        ('submit Data');

        $scope.apartDet = [{
            pCode: document.getElementById('pCode').value,
            pCost: document.getElementById('pCost').value,
            hosName: document.getElementById('hosName').value,
            pImage: document.getElementById('pImage').value,
            pDisc: document.getElementById('pDisc').value,
            pCategory: document.getElementById('pCategory').value,
            bCategory: document.getElementById('bCategory').value,
            vCategory: document.getElementById('vCategory').value,
            aCategory: document.getElementById('aCategory').value,
            fCategory: document.getElementById('fCategory').value
        }];

        var prods = [];
        prods = $scope.apartDet;
        ("apart details to add");
        //        (prods[0].pCode);

        $http.post('/addapartDet', prods).success(function (prods) {
            (prods);
            ("Submitted Data");
        });
    }

    $scope.getData = function () {
        var getpCode = [];
        $scope.productCode = [{
            pCode: document.getElementById('getpCode').value
        }];
        getpCode = $scope.productCode;
        $http.post('/getApart', getpCode).success(function (gotProducts) {

            var p = [];
            //double parse the string for array
            p = JSON.parse(gotProducts);
            p = JSON.parse(p);
            (p);
            document.getElementById('pCode').value = p[0].pCode;
            document.getElementById('pCost').value = p[0].pCost;
            document.getElementById('hosName').value = p[0].hosName;
            document.getElementById('pImage').value = p[0].pImage;
            document.getElementById('pDisc').value = p[0].pDisc;
            document.getElementById('pCategory').value = p[0].pCategory;
            document.getElementById('bCategory').value = p[0].bCategory;
            document.getElementById('vCategory').value = p[0].vCategory;
            document.getElementById('aCategory').value = p[0].aCategory;
            document.getElementById('fCategory').value = p[0].fCategory;
            $scope.imageName = p[0].pImage;
            ("Got Product Data");
        });
    }

    $scope.updateData = function () {
        ('submit Data for Apartment Update');

        $scope.apartDet = [{
            pCode: document.getElementById('pCode').value,
            pCost: document.getElementById('pCost').value,
            hosName: document.getElementById('hosName').value,
            pImage: document.getElementById('pImage').value,
            pDisc: document.getElementById('pDisc').value,
            pCategory: document.getElementById('pCategory').value,
            bCategory: document.getElementById('bCategory').value,
            vCategory: document.getElementById('vCategory').value,
            aCategory: document.getElementById('aCategory').value,
            fCategory: document.getElementById('fCategory').value

        }];

        var prods = [];
        prods = $scope.apartDet;
        (prods);
        //        (prods[0].pCode);

        $http.post('/updateApart', prods).success(function (prods) {
            (prods);
            ("Updated Data");
        });
    }



    $scope.deleteData = function () {
        var getpCode = [];

        $scope.productCode = [{
            pCode: document.getElementById('getpCode').value
        }];
        getpCode = $scope.productCode;
        $http.post('/deleteApart', getpCode).success(function (gotProducts) {
            (gotProducts);

            document.getElementById('pCode').value = "";
            document.getElementById('pCost').value = "";
            document.getElementById('hosName').value = "";
            document.getElementById('pImage').value = "";
            document.getElementById('pDisc').value = "";
            document.getElementById('pCategory').value = "";
            document.getElementById('bCategory').value = "";
            document.getElementById('vCategory').value = "";
            document.getElementById('aCategory').value = "";
            document.getElementById('fCategory').value = "";
            $scope.imageName = "";
        });
    }

});

