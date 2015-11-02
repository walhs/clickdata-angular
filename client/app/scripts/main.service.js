(function () {

    'use strict';

    angular
        .module('trackerApp.auth')
        .factory('MainService', MainService);

        MainService.$inject = ['PostApi'];

        function MainService(PostApi) {
            var vm = {
                init: init,
            };
            return vm;

            function init() {
                vm.posts = [];
                PostApi.list().success(function(posts){
                    vm.posts = posts;
                });
            }
        }
})();