angular.module('assessment')
.service('mainService', function($http){

	this.getProducts = function	(){
		return $http({
		  method: 'GET',
		  url: 'https://dev-assessment.firebaseio.com/products.json'
		}).then(function (response) {
			var products = [];

			for (var key in response.data) {
				var product = response.data[key];

                product.id = key;
                products.push(product)
            }


		    return products;
		  })
		  .catch(function(error) {
		    console.log(error)
		  });
	};

	this.getSingleProduct = function (id){
		var concatURL = 'https://dev-assessment.firebaseio.com/products/' + id + '.json';
		return $http({
		  method: 'GET',
		  url: concatURL
		}).then(function (response) {
		    return response.data;
		  })
		.catch(function (error) {
		    console.log(error)
		  });
	};

});