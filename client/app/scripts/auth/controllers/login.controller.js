(function () {

	'use strict';

	angular.module('trackerApp.auth')
	  .controller('LogInCtrl', LogInCtrl);

	LogInCtrl.$inject = ['LoginService', 'saveClickDataService'];

  function LogInCtrl (LoginService, saveClickDataService) {
 		var vc = this;

        vc.vm = LoginService;
        vc.vm.init();
        vc.saveClickData = saveClickDataService;
  }

})();