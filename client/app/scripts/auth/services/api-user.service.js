(function(){
    'use strict';

    angular
        .module('trackerApp.auth')
        .factory('UserApi', UserApi);

    UserApi.$inject = [
        'AppAjax'
    ]

    function UserApi(AppAjax){
        var vm = {
            get: get,
        };

        return vm;

        function get(user_id){
            var user_url = '/api/users/' + user_id;
            return AppAjax.get(user_url);
        }
    }
})();