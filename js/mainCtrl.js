angular.module('assessment')
.controller('mainCtrl', function($scope, mainService, $stateParams){


mainService.getProducts().then(function (response) {
	    $scope.products = response;
	    return ($scope.products);
	  }, function (error) {
	    console.log(error)
	  });

mainService.getSingleProduct($stateParams.id).then(function (response) {
	    $scope.singleProduct = response;
	    return ($scope.products);
	  }, function (error) {
	    console.log(error)
	  });

});