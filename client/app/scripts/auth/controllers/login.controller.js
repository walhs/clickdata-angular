(function () {

	'use strict';

	angular.module('trackerApp.auth')
	  .controller('LogInCtrl', LogInCtrl);

	LogInCtrl.$inject = ['AuthService'];

  function LogInCtrl (LoginService) {
 		var vc = this;

    vc.vm = LoginService;
    vc.vm.init();
  }

})();