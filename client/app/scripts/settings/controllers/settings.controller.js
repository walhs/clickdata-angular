(function () {

    'use strict';

    angular.module('trackerApp.settings')
      .controller('SettingsCtrl', SettingsCtrl);

    SettingsCtrl.$inject = ['SettingsService'];

    function SettingsCtrl(SettingsService) {
        var vc = this;
        vc.vm = SettingsService;
    }

})();