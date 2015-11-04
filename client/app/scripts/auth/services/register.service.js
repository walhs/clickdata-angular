(function () {
	'use strict';

	angular
		.module('trackerApp.auth')
		.factory('RegisterService', RegisterService);

	RegisterService.$inject = [
		'AuthService',
        '$location',
        'TokenService'
	];

	function RegisterService (AuthService, $location, TokenService) {
		var vm = {
			init: init,
            register: register,
            matchPasword: matchPasword
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
            if(vm.matchPasword()){
                AuthService.register(vm.email, vm.password, vm.password_confirmation, vm.username).then(function(registeredUser) {
                    TokenService.updateToken();
                    $location.path('#/');
                }, function(error) {
                    if(error.data.errors){
                        if(error.data.errors.email){
                            alert("Email " + error.data.errors.email);
                        }
                        else if(error.data.errors.password_confirmation){
                            alert(error.data.errors.password_confirmation);
                        }
                        else if(error.data.errors.password){
                            alert(error.data.errors.password);
                        }
                    }
                    else{
                        if(error.data.indexOf('duplicate key value')){
                            alert("Username already been taken");
                        }
                        else{
                            alert("Erro, favor conferir se o formulario está preenchido corretamente.")
                        }
                    }
                });
            }
		}

        function matchPasword(){
            if(vm.password || vm.password_confirmation){
                return vm.password === vm.password_confirmation;
            }

            return true;
        }
	}
})();