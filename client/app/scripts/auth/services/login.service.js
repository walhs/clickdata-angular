(function () {

  'use strict'

  angular
      .module('trackerApp.auth')
      .factory('LoginService', LoginService);

      LoginService.$inject = ['AuthService', '$location', 'TokenService', 'AlertsService'];

      function LoginService(AuthService, $location, TokenService, AlertsService) {
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
                var alert = {
                  message: error.data.error,
                  type: "error"
                };
                AlertsService.pushAlert(alert);
            });
          }
      }

})();