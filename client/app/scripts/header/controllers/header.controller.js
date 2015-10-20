(function () {
	
	'use strict';

	angular
		.module('trackerApp.header')
		.controller('HeaderCtrl', ['$route', HeaderCtrl]);

	HeaderCtrl.$inject = [
		'HeaderService'
	]

	function HeaderCtrl (HeaderService, $route) {
		var vc = this;
		vc.vm = HeaderService;
		vc.route = $route;
	}
})();