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
                if(error.data.errors){
                    if(error.data.errors.email){
                        alert(error.data.errors.email);
                    }
                    else if(error.data.errors.password_confirmation){
                        alert(error.data.errors.password_confirmation);
                    }
                }
                else{
                    alert("Erro, favor conferir se o formulario está preenchido corretamente.")
                }
            });
		}
	}
})();