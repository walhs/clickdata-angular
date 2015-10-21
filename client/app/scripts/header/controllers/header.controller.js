(function () {
	
	'use strict';

	angular
		.module('trackerApp.header')
		.controller('HeaderCtrl', [HeaderCtrl]);

	HeaderCtrl.$inject = [
		'AuthService'
	]

	function HeaderCtrl (AuthService) {
		var vc = this;
		vc.auth = AuthService;
	}
})();