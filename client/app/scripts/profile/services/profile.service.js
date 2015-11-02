(function(){
    'use strict';

    angular
        .module('trackerApp.profile')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = [
        'UserApi'
    ]

    function ProfileService(UserApi){
        var vm = {
            init: init,
        };

        return vm;

        function init(user_id){
            vm.user = null;
            UserApi.get(user_id).success(function(user){
                vm.user = user;
            })
        }
    }
})();