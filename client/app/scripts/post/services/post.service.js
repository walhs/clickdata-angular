(function () {
  'use strict';

  angular.module('trackerApp.post').factory('PostService', PostService);

  PostService.$inject = ['PostApi', 'AlertsService', 'PostsService'];

  function PostService(PostApi, AlertsService, PostsService) {
    var vm = {
        deletePost: deletePost
    };

    return vm;

    function deletePost(post){
        PostApi.deletePost(post).then(function(result){
            PostsService.removePostFromList(post);
            var alert = {
              message: 'Post deletado com sucesso.',
              type: "success"
            };
            AlertsService.pushAlert(alert);
        },
        function(error){
            var alert = {
              message: error.data.error,
              type: "error"
            };
            AlertsService.pushAlert(alert);
        })
    }
  }
})();