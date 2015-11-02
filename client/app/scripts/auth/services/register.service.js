(function () {
	'use strict';

	angular
		.module('trackerApp.auth')
		.factory('RegisterService', RegisterService);

	RegisterService.$inject = [
		'AuthService',
        '$location'
	];

	function RegisterService (AuthService, $location) {
		var vm = {
			init: init,
            register: register
		};

		return vm;

		function init () {
			vm.firstName = null;
			vm.lastName = null;
			vm.username = null;
			vm.email = null;
			vm.password = null;
			vm.password_confirmation = null;
		}

		function register () {
            AuthService.register(vm.email, vm.password, vm.password_confirmation, vm.username).then(function(registeredUser) {
                $location.path('#/');
            }, function(error) {
              // Registration failed...
            });
		}
	}
})();