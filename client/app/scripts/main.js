(function () {

	'use strict';

	angular.module('trackerApp')
	  .controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['AuthService', 'MainService'];

	function MainCtrl(AuthService, MainService) {
		var vc = this;

		vc.auth = AuthService;
		vc.vm = MainService;

		vc.vm.init();
	}

})();