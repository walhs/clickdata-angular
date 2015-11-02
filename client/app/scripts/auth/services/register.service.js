(function () {
	'use strict';

	angular
		.module('trackerApp.auth')
		.factory('RegisterService', RegisterService);

	RegisterService.$inject = [
		'Auth'
	];

	function RegisterService (Auth) {
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
			var credentials = {
			 	email: vm.email,
                password: vm.password,
                password_confirmation: vm.password_confirmation
			};

			var config = {
                headers: {
                    'X-HTTP-Method-Override': 'POST',
                    'Content-Type': 'application/json',
                    // 'X-Requested-With': 'XMLHttpRequest'
                },
                // withCredentials: true
            };

            Auth.register(credentials, config).then(function(registeredUser) {
                console.log(registeredUser); // => {id: 1, ect: '...'}
            }, function(error) {
              // Registration failed...
            });
		}
	}
})();