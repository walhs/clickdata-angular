(function () {

	'use strict'

	angular
		.module('trackerApp.auth')
		.factory('AuthService', AuthService);

	function AuthService (Auth, $q) {
		var vm = {
			init: init,
			login: login,
			logout: logout,
			isUserLogged: isUserLogged,
			register: register
		};

	    var config = {
	        headers: {
	            'X-HTTP-Method-Override': 'POST',
	            'Content-Type': 'application/json',
	        }
	    };

		return vm;

		function init() {
			vm.loggedUser = null;
		}

		function login(email, password){
			var defer = $q.defer()

            var credentials = {
                email: email,
                password: password
            };

			Auth.login(credentials, config).then(function(user) {
				vm.loggedUser = user;
                console.log(user);
                defer.resolve(user);
            }, function(error) {
            	defer.reject(error);
            });

            return defer.promise;
		}

		function logout() {
			vm.loggedUser = null;
		}

		function isUserLogged() {
			return vm.loggedUser !== null;
		}

		function register(email, password, password_confirmation){
			var defer = $q.defer()

			var credentials = {
			 	email: email,
                password: password,
                password_confirmation: password_confirmation
			};

            Auth.register(credentials, config).then(function(user) {
                vm.loggedUser = user;
                console.log(user);
                defer.resolve(user);
            }, function(error) {
              	defer.reject(error);
            });

            return defer.promise;
		}
	}

})();