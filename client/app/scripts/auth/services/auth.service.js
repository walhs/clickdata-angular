(function () {

	'use strict'

	angular
		.module('trackerApp.auth')
		.factory('AuthService', AuthService);

		function AuthService () {
			var vm = {
				init: init,
				logIn: logIn,
				logOut: logOut,
				isUserLogged: isUserLogged
			};
			return vm;

			function init() {
				vm.loggedUser = null;
			}

			function logIn(email, password){
				vm.loggedUser = {
					name: 'jumento celestino',
					email: email
				};
			}

			function logOut() {
				vm.loggedUser = null;
			}

			function isUserLogged() {
				return vm.loggedUser !== null;
			}
		}

})();