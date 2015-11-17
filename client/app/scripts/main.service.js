(function () {

    'use strict';

    angular
        .module('trackerApp.auth')
        .factory('MainService', MainService);

        MainService.$inject = ['PostApi', 'PostsService'];

        function MainService(PostApi, PostsService) {
            var vm = {
                init: init,
            };
            return vm;

            function init() {
                vm.posts = [];
                PostApi.list().success(function(posts){
                    PostsService.init({posts: posts});
                });
            }
        }
})();