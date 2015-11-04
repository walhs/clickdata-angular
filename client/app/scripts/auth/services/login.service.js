(function () {

  'use strict'

  angular
      .module('trackerApp.auth')
      .factory('LoginService', LoginService);

      LoginService.$inject = ['AuthService', '$location', 'TokenService'];

      function LoginService(AuthService, $location, TokenService) {
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
            AuthService.login(vm.email, vm.password).then(function(user) {
                TokenService.updateToken();
                $location.path('#/');
            }, function(error) {
                alert(error.data.error);
            });
          }
      }

})();