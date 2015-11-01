(function () {

    'use strict'

    angular
        .module('trackerApp.auth')
        .factory('LoginService', LoginService);

        function LoginService (AuthService, $location) {
            var vm = {
                init: init,
                logIn: logIn,
            };
            return vm;

            function init(){
                vm.email = 'email@email.com';
                vm.password = '';
            }

            function logIn(){
                AuthService.logIn(vm.email, vm.password);
                $location.path('#/');
            }
        }

})();