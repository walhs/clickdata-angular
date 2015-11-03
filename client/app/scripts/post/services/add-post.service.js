(function(){
    'use strict';

    angular
        .module('trackerApp.post')
        .factory('AddPostService', AddPostService);

    AddPostService.$inject = [
        'PostApi',
        '$location',
        'AuthService'
    ]

    function AddPostService(PostApi, $location, AuthService){
        var vm = {
            init: init,
            savePost: savePost
        };

        return vm;

        function init(){
            vm.text = null;
            vm.saving = false;
        }

        function savePost(){
            var post = {
                text: vm.text
            };
            vm.saving = true;
            PostApi.save(post).success(function(post){
                // TODO: mudar url dps
                vm.text= null;
                $location.path('/profile/' + AuthService.loggedUser.id);
            }).finally(function(){
                vm.saving = false;
            })
        }
    }
})();