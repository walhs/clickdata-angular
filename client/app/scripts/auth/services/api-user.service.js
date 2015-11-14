(function(){
    'use strict';

    angular
        .module('trackerApp.auth')
        .factory('UserApi', UserApi);

    UserApi.$inject = [
        'AppAjax'
    ];

    function UserApi(AppAjax){
        var vm = {
            get: get,
            editPassword: editPassword
        };

        return vm;

        function get(user_id){
            var user_url = '/api/users/' + user_id;
            return AppAjax.get(user_url);
        }

        function editPassword(new_password, new_password_confirmation){
            var data = {
                new_password: new_password,
                new_password_confirmation: new_password_confirmation,
            };

            var user_url = '/api/users/password';
            return AppAjax.post(user_url, data);
        }
    }
})();