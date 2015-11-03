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
               _saveTokenCookie(token);
            }).error(function(error){
                vm.currentToken = $cookies.getObject(TOKEN_KEY);
            });
        }

        function renewToken() {
            TokenApi.generateToken().success(function(token){
                vm.currentToken = token;
                _saveTokenCookie(token);
            });
        }

        function _saveTokenCookie(token){
            var now = new Date();
            $cookies.putObject(TOKEN_KEY, token, {
                path: '/',
                expires: new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
            });
        }
    }
})();