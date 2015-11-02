(function () {

  'use strict'

  angular
      .module('trackerApp.auth')
      .factory('LoginService', LoginService);

      function LoginService (Auth, $location) {
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
            var credentials = {
                email: vm.email,
                password: vm.password
            };
            var config = {
                headers: {
                    'X-HTTP-Method-Override': 'POST',
                    'Content-Type': 'application/json',
                }
            };

            Auth.login(credentials, config).then(function(user) {
                console.log(user); // => {id: 1, ect: '...'}
                $location.path('#/');
            }, function(error) {
                // Authentication failed...
            });

              // Auth.logIn(vm.email, vm.password);

          }
      }

})();