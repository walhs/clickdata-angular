(function () {
    'use strict';

    angular
        .module('trackerApp.auth')
        .factory('TokenService', TokenService);

    TokenService.$inject = [
        'AuthService',
        '$cookies',
        'TokenApi'
    ];

    function TokenService(AuthService, $cookies, TokenApi) {
        var vm = {
            init: init,
            updateToken: updateToken,
            renewToken: renewToken
        };

        var TOKEN_KEY = 'CLICKDATA_TOKEN_KEY';

        return vm;

        function init(){
            vm.currentToken = $cookies.getObject(TOKEN_KEY);
            if(!vm.currentToken){
                vm.renewToken();
            }
        }

        function updateToken(){
            vm.currentToken.user_id = AuthService.loggedUser.id;
            TokenApi.save(vm.currentToken).success(function(token){
                $cookies.putObject(TOKEN_KEY, token);
            }).error(function(error){
                vm.currentToken = $cookies.getObject(TOKEN_KEY);
            });
        }

        function renewToken() {
            TokenApi.generateToken().success(function(token){
                vm.currentToken = token;
                $cookies.putObject(TOKEN_KEY, token);
            });
        }
    }
})();