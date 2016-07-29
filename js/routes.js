angular.module('assessment')

	.config(function($stateProvider, $urlRouterProvider){
		
		$stateProvider
		    .state('home', {
		        url: '/',
		        templateUrl: 'views/home.html',
		        controller: 'mainCtrl'
		    })
		    .state('products', {
		        url: '/products/:id',
		        templateUrl: 'views/product-details.html',
		        controller: 'mainCtrl'
		    })
		    .state('about', {
		        url: '/about',
		        templateUrl: 'views/about.html',
		        controller: 'mainCtrl'
		    })
		    .state('blog', {
		        url: '/blog',
		        templateUrl: 'views/blog.html',
		        controller: 'mainCtrl'
		    })
		    .state('shop', {
		        url: '/shop',
		        templateUrl: 'views/shop.html',
		        controller: 'mainCtrl'
		    });
		

	$urlRouterProvider
        .otherwise('/');
	});