(function () {

	'use strict'

	angular
		.module('trackerApp.auth')
		.factory('AuthService', AuthService);

	function AuthService (Auth, $q, $cookies) {
		var vm = {
			init: init,
			login: login,
			logout: logout,
			isUserLogged: isUserLogged,
			register: register,
            isCurrentLoggedUser: isCurrentLoggedUser
		};

	    var config = {
	        headers: {
	            'X-HTTP-Method-Override': 'POST',
	            'Content-Type': 'application/json',
	        }
	    };

        var LOGGED_USER_KEY = 'CLICKDATA_KEY';

		return vm;

		function init() {
			vm.loggedUser = $cookies.getObject(LOGGED_USER_KEY);
            if(vm.loggedUser){
                Auth._currentUser = vm.loggedUser;
            }
		}

		function login(email, password){
			var defer = $q.defer()

            var credentials = {
                email: email,
                password: password
            };

			Auth.login(credentials, config).then(function(user) {
                _saveUserCookie(user);
				vm.loggedUser = user;
                defer.resolve(user);
            }, function(error) {
            	defer.reject(error);
            });

            return defer.promise;
		}

		function logout() {
			vm.loggedUser = null;
            $cookies.remove(LOGGED_USER_KEY);
		}

		function isUserLogged() {
			return angular.isObject(vm.loggedUser);
		}

		function register(email, password, password_confirmation, username){
			var defer = $q.defer()

			var credentials = {
			 	email: email,
                username: username,
                password: password,
                password_confirmation: password_confirmation
			};

            Auth.register(credentials, config).then(function(user) {
                _saveUserCookie(user);
                vm.loggedUser = user;
                console.log(user);
                defer.resolve(user);
            }, function(error) {
              	defer.reject(error);
            });

            return defer.promise;
		}

        function _saveUserCookie(user){
            var now = new Date();
            $cookies.putObject(LOGGED_USER_KEY, user, {
                path: '/',
                expires: new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
            });
        }

        function isCurrentLoggedUser(user_id){
            if(angular.isObject(vm.loggedUser)){
                return vm.loggedUser.id === user_id;
            }

            return false;
        }
	}

})();