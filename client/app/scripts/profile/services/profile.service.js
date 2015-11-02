(function(){
    'use strict';

    angular
        .module('trackerApp.profile')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = [

    ]

    function ProfileService(){
        var vm = {
            init: init,
        };

        return vm;

        function init(user_id){
        }
    }
})();