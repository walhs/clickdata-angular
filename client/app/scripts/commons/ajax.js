(function(){
    "use strict";

    angular.module('appajax', ['trackerApp.auth']);

    angular.module('appajax').config(
        function($httpProvider){
            // $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            // Esse content-type estava dando problema com o devise - Ele espera um json
            // tinha duas opcoes:
            // 1- Trocar para $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
            // 2- Manter esse contet-type, mas mudar apenas na chamada feitar no para isso adicionando no parametro config do angular-devise
            // Escolhi a segunda opcao
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        }
    );

    angular.module('appajax').factory('AppAjax', function($http, AuthService){

        var AppAjax = {
            get: get,
            post: post,
            put: put,
            del: del,
        };

        return AppAjax;

        function get(url, params){
            if(!params){
                params = {};
            }

            if(AuthService.loggedUser){
                params.user_id = AuthService.loggedUser.id;
            }

            var promise = $http({
                method: 'GET',
                url: url,
                params: params
            });
            return promise;
        }

        function post(url, params){
            if(!params){
                params = {};
            }

            if(AuthService.loggedUser){
                params.user_id = AuthService.loggedUser.id;
            }

            var promise = $http({
                method: 'POST',
                url: url,
                data: $.param(params)
            });
            return promise;
        }

        function put(url, params){
            if(!params){
                params = {};
            }

            if(AuthService.loggedUser){
                params.user_id = AuthService.loggedUser.id;
            }

            var promise = $http({
                method: 'PUT',
                url: url,
                data: params
            });
            return promise;
        }

        function del(url, params){
            if(!params){
                params = {};
            }

            if(AuthService.loggedUser){
                params.user_id = AuthService.loggedUser.id;
            }

            var promise = $http({
                method: 'DELETE',
                url: url,
                data: $.param(params)
            });
            return promise;
        }
    });
})();