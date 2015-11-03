(function () {
	'use strict';

	angular
	.module('trackerApp.header')
	.factory('HeaderService', HeaderService);

	HeaderService.$inject = ['AuthService', 'TokenService', '$location'];

	function HeaderService(AuthService, TokenService, $location) {
		var vm = {
			logout: logout
		};

		return vm;

		function logout(){
			AuthService.logout();
			TokenService.renewToken();
			$location.path('#/');
		}

	}
})();