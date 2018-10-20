var app = angular.module("app");
app.controller('jopa',function($scope,$http,$location){
// 	// $scope.visibleMenu = false;
// 	// $scope.classMenu = '';
// 	// // $scope.test = "HELLOW WORLD";

// 	// $scope.showMenu = function() {
// 	// 	$scope.visibleMenu = !$scope.visibleMenu;
// 	// }
		$scope.model = [];

	//////RESPONSE
		$http({
	 		method: 'POST',
	  		url: '/selectData',
		}).then(function(response){
		$scope.model = response.data;
	});

	///UPDATE
	$scope.lineThrough = function(id){
		for(i in $scope.model){
			if($scope.model[i]._id == id){
				$scope.model[i].textStyle = "line-through";
			}
		}
		$http({
			method:'POST',
			url:'/updateData',
			data:{upId:id,textStyle:"line-through"}
		});
	}
});

	////INSERT
app.controller("myCtrl",function($scope,$http,$location){
	$scope.clickButton = function(){
		var text = $scope.text;
		$http({
	 		method: 'POST',
	  		url: '/handler',
	  		data:{content:text,textStyle:""}
		}).then(function(){
			$location.path('/');	
		});
		$scope.text="";
	}
});
