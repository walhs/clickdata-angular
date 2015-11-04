(function(){
    "use strict";

    angular.module('trackerApp.alerts').factory('AlertsService', AlertsService);

    AlertsService.$inject = ['$timeout'];

    function AlertsService($timeout){
        var model = {
            init: init,
            pushAlert: pushAlert,
            closeAlert: closeAlert
        };

        function pushAlert(alert){
            model.alerts.push(alert);

            $timeout(function(){
                model.closeAlert(alert);
            }, 3000);
        }

        function closeAlert(alert){
            var index = model.alerts.indexOf(alert);
            if(index > -1) {
                model.alerts.splice(index, 1);
            }
        }

        return model;

        function init(){
            model.alerts = [];
        }
    }
})();