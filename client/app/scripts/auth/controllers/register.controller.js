/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fakeLunchHubApp
 */

(function () {

	'use strict';

	angular.module('trackerApp.auth')
	  .controller('RegisterCtrl', RegisterCtrl);

	RegisterCtrl.$inject = [
		'RegisterService',
		'saveClickDataService'
	];

	function RegisterCtrl(RegisterService, saveClickDataService){
		var vc = this;
		vc.vm = RegisterService;
		vc.vm.init();
		vc.saveClickData = saveClickDataService;
	}

})();