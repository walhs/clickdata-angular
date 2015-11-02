(function () {

	'use strict';

	angular
		.module('trackerApp.header')
		.controller('HeaderCtrl', HeaderCtrl);

	HeaderCtrl.$inject = [
		'AuthService',
		'$location'
	];

	function HeaderCtrl (AuthService, $location) {
		var vc = this;
		vc.auth = AuthService;

		// Lugar errado - @Refactoring
		vc.logout = function(){
			vc.auth.logOut();
			$location.path('#/');
		}
	}
})();