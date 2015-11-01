(function () {

    'use strict';

    angular.module('trackerApp.settings')
      .controller('SettingsCtrl', SettingsCtrl);

    SettingsCtrl.$inject = ['AuthService'];

    function SettingsCtrl(AuthService) {
        var vc = this;
        vc.auth = AuthService;
    }

})();