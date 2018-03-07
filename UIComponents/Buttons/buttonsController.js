uiApp.controller("buttonsController", ["$scope", "$timeout", function($scope, $timeout){
	$scope.btn1fClick = false;
	$scope.activateBtn = function(){
		$scope.btn1fClick = true;
		$timeout(function(){
			$scope.btn1fClick = false;
		}, 500);
	};
}]);