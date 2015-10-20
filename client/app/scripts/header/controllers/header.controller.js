(function () {
	
	'use strict';

	angular
		.module('trackerApp.header')
		.controller('HeaderCtrl', ['$route', HeaderCtrl]);

	HeaderCtrl.$inject = [
		'HeaderService'
	]

	function HeaderCtrl ($route, HeaderService) {
		var vc = this;
		vc.vm = HeaderService;
		vc.route = $route;
	}
})();