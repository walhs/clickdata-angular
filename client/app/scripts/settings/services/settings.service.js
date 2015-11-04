(function(){
    'use strict';

    angular
        .module('trackerApp.settings')
        .factory('SettingsService', SettingsService);

    SettingsService.$inject = [
    ];

    function SettingsService(){
        var vm = {
            init: init,
            matchPasword: matchPasword
        };

        return vm;

        function init(){
            vm.password = null;
            vm.password_confirmation = null;
        }

        function matchPasword(){
            if(vm.password || vm.password_confirmation){
                return vm.password === vm.password_confirmation;
            }

            return true;
        }
    }
})();