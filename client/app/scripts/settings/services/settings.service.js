(function(){
    'use strict';

    angular
        .module('trackerApp.settings')
        .factory('SettingsService', SettingsService);

    SettingsService.$inject = [
        'UserApi',
        'AlertsService'
    ];

    function SettingsService(UserApi, AlertsService){
        var vm = {
            init: init,
            matchPasword: matchPasword,
            updatePassword: updatePassword
        };

        return vm;

        function init(){
            vm.new_password = null;
            vm.new_password_confirmation = null;
        }

        function matchPasword(){
            if(vm.new_password_confirmation){
                return vm.new_password === vm.new_password_confirmation;
            }

            return false;
        }

        function updatePassword(){
            if(vm.matchPasword()){
                UserApi.editPassword(vm.new_password, vm.new_password_confirmation).success(function(){
                    var alert = {
                      message: 'Senha editada com sucesso',
                      type: "success"
                    };
                    AlertsService.pushAlert(alert);
                    vm.init();
                }).error(function(){
                    var alert = {
                      message: error.data.error,
                      type: "error"
                    };
                    AlertsService.pushAlert(alert);
                });
            }
        }
    }
})();