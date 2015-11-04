(function () {

    "use strict";

    angular.module('trackerApp.alerts').directive("alerts", alerts);

    function alerts (AlertsService) {
        var directive = {
            restrict: "E",
            templateUrl: 'scripts/alerts/directives/alerts.html',
            replace: true,
            scope:{},
            controller: alertsController,
            controllerAs: 'vc'
        }
        return directive;

        function alertsController(){
            var vc = this;
            vc.vm = AlertsService;
            vc.vm.init();
        }
    }
})();