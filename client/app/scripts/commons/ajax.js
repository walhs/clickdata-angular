angular.module('appajax', ['ngCookies']);

angular.module('appajax').config(
    function($httpProvider){
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
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