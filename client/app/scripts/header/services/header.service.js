(function () {
	'use strict';

	angular
	.module('trackerApp.header')
	.factory('HeaderService', HeaderService);

	function HeaderService () {
		var vm = {
			init: init,
		};

		return vm;

		function init () {

		}

	}
})();