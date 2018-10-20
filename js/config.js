var app = angular.module('app',['ngRoute']).config(function($routeProvider,$locationProvider){
	$routeProvider
		.when('/',{
			templateUrl:'views/notes.html',
			controller: "jopa"
		})
		.when('/create',{
			templateUrl:'views/create.html',
			controller:'myCtrl'
		});
	$locationProvider.html5Mode({
        enabled: true, 
        requireBase: false
    });
});