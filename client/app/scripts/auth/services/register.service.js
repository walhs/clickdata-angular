(function () {
	'use strict';

	angular
		.module('trackerApp.auth')
		.factory('RegisterService', RegisterService);

	RegisterService.$inject = [
		'AuthService',
		'Auth'
	];

	function RegisterService () {
		var vm = {
			init: init
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
          'X-HTTP-Method-Override': 'POST'
        }
      };
			Auth.register(credentials, config).then(function(registeredUser) {
          console.log(registeredUser); // => {id: 1, ect: '...'}
      }, function(error) {
          // Registration failed...
      });
		}
	}
})();