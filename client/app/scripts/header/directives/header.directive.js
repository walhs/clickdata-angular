(function () {

	'use strict';

	angular
		.module('trackerApp')
		.directive('header', [header]);

	function header () {
		return {
			restrict: 'E',
			templateURL: 'scripts/header/directives/header.directive.html',
			// scope:{},
			// replace: true,
			controller: 'HeaderCtrl'
			//controllerAs: 'vc'  
		}
	}
});