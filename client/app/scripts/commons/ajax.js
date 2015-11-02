angular.module('appajax', ['ngCookies']);

angular.module('appajax').config(
    function($httpProvider){
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // Esse content-type estava dando problema com o devise - Ele espera um json
        // tinha duas opcoes:
        // 1- Trocar para $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
        // 2- Manter esse contet-type, mas mudar apenas na chamada feitar no para isso adicionando no parametro config do angular-devise
        // Escolhi a segunda opcao
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
);

angular.module('appajax').factory('AppAjax', function($http, $cookies, $log){

    var AppAjax = {
        get: get,
        post: post,
    };

    return AppAjax;

    function get(url, params){
        if(!params){
            params = {};
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
        //$http.defaults.headers.post['X-CSRFToken'] = $cookies.get('csrftoken');
        var promise = $http({
            method: 'POST',
            url: url,
            data: $.param(params)
        });
        return promise;
    }
});