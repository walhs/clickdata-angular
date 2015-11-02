(function(){
    'use strict';

    angular
        .module('trackerApp.post')
        .factory('PostApi', PostApi);

    PostApi.$inject = [
        'AppAjax'
    ]

    function PostApi(AppAjax){
        var vm = {
            list: list,
            save: save,
            upvote: upvote
        };

        return vm;

        function list(){
            return AppAjax.get('/api/post.json');
        }

        function save(post) {
            var params = {
                post: post
            }
            return AppAjax.post('/api/post.json', params);
        }

        function upvote(post){
            var upvote_url = '/posts/' + post.id + '/upvote.json';
            return AppAjax.post(upvote_url);
        }
    }
})();