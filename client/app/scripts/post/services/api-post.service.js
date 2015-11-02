(function(){
    angular
    .module('trackerApp.post')
    .factory('PostApi', PostApi);

    PostApi.$inject = [
        'AppAjax'
    ]

    function PostApi(AppAjax){
        var vm = {
            list: list,
            save: save
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
    }
})();