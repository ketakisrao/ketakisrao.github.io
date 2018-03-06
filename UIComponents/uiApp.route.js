uiApp.config([
	"$stateProvider",
	"$urlRouterProvider",
	"$locationProvider",
	function($stateProvider, $urlRouterProvider, $locationProvider){
		$locationProvider.html5Mode(true);

		$stateProvider.state('buttons', {
			url: '/buttons',
			templateUrl: 'Buttons/Buttons.html',
			controller: 'buttonsController',
			resolve: {function(){
			}}
		});
		$urlRouterProvider.when("/", "/buttons");
		$urlRouterProvider.otherwise(function($injector){
			console.log("Otherwise")
			var state = $injector.get('$state');
			console.log(state);
			state.go('buttons');
		});
	}
]);