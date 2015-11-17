(function(){
    'use strict';

    angular
        .module('trackerApp.profile')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = [
        'UserApi',
        'PostsService'
    ]

    function ProfileService(UserApi, PostsService){
        var vm = {
            init: init,
        };

        return vm;

        function init(user_id){
            vm.user = null;
            UserApi.get(user_id).success(function(user){
                vm.user = user;
                vm.user.posts.map(function(p){
                    p.user = user;
                });
                PostsService.init({posts: vm.user.posts, user_id: user_id});
            })
        }
    }
})();