uiApp.controller("buttonsController", ["$scope", "$timeout", function($scope, $timeout){
	console.log("Here");
	$scope.btn1fClick = false;
	$scope.activateBtn = function(){
		$scope.btn1fClick = true;
		$timeout(function(){
			$scope.btn1fClick = false;
		}, 700);
	};
}]);