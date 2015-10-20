(function () {
	'use strict';

	angular
	.module('trackerApp')
	.factory('HeaderService', [HeaderService]);

	function HeaderService () {
		var vm = {
			init: init,
		};

		return vm;

		function init () {
			
		}
	}
});