(function () {

    'use strict'

    angular
        .module('trackerApp.auth')
        .factory('MainService', MainService);

        function MainService () {
            var vm = {
                init: init,
            };
            return vm;

            function init() {
                vm.posts = [];
            }
        }
})();