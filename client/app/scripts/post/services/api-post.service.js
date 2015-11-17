(function(){
    'use strict';

    angular
        .module('trackerApp.post')
        .factory('PostApi', PostApi);

    PostApi.$inject = [
        'AppAjax'
    ];

    function PostApi(AppAjax){
        var vm = {
            list: list,
            save: save,
            upvote: upvote,
            deletePost: deletePost
        };

        return vm;

        function list(){
            return AppAjax.get('/api/posts.json');
        }

        function save(post) {
            var params = {
                post: post
            }
            return AppAjax.post('/api/posts.json', params);
        }

        function upvote(post){
            var upvote_url = '/api/posts/' + post.id + '/upvote.json';
            return AppAjax.post(upvote_url);
        }

        function deletePost(post){
            var delete_url = '/api/posts/' + post.id + '.json';
            return AppAjax.del(delete_url);
        }
    }
})();