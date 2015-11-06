(function () {
	'use strict';

	angular
		.module('trackerApp.auth')
		.factory('RegisterService', RegisterService);

	RegisterService.$inject = [
		'AuthService',
        '$location',
        'TokenService',
        'AlertsService'
	];

	function RegisterService (AuthService, $location, TokenService, AlertsService) {
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
                    var alert = {
                        type: "error"
                    }
                    if(error.data.errors){
                        if(error.data.errors.email){
                            alert.message = "Email " + error.data.errors.email;
                        }
                        else{
                            alert.message = "Erro, desconhecido em algum dos campos.";
                        }
                    }
                    else{
                        if(error.data.indexOf('duplicate key value')){
                            alert.message = "Username already been taken";
                        }
                        else{
                            alert.message = "Erro, favor conferir se o formulario está preenchido corretamente.";
                        }
                    }

                    AlertsService.pushAlert(alert);
                });
            }
		}

        function matchPasword(){
            if(vm.password_confirmation){
                return vm.password === vm.password_confirmation;
            }

            return true;
        }
	}
})();