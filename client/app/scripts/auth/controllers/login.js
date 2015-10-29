/**
 * @ngdoc function
 * @name fakeLunchHubApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the fakeLunchHubApp
 */


	//$scope.groups = Group.query();


(function () {

	'use strict';

	angular.module('trackerApp.auth')
	  .controller('LogInCtrl', LogInCtrl);

  function LogInCtrl (LoginService) {
 		var vc = this;

        vc.vm = LoginService;
        vc.vm.init();
  }

})();