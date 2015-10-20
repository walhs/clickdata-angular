(function () {
	
	'use strict';

	angular
		.module('trackerApp.header')
		.controller(HeaderCtrl, 'HeaderCtrl');

	angular.$inject = [
		'HeaderService'
	]

	function HeaderCtrl (HeaderService) {
		var vc = this;
		vc.vm = HeaderService;
	}
});