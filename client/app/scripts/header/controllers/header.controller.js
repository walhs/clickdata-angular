(function () {

	'use strict';

	angular
		.module('trackerApp.header')
		.controller('HeaderCtrl', HeaderCtrl);

	HeaderCtrl.$inject = [
		'HeaderService',
		'AuthService'
	];

	function HeaderCtrl (HeaderService, AuthService) {
		var vc = this;
		vc.auth = AuthService;
		vc.vm = HeaderService;
	}
})();