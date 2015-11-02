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
		'RegisterService'
	];

	function RegisterCtrl(RegisterService){
		var vc = this;
		vc.vm = RegisterService;
		vc.vm.init();
	}

})();