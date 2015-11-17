(function () {
  'use strict';

  angular.module('trackerApp.post').factory('PostService', PostService);

  PostService.$inject = ['PostApi', 'AlertsService'];

  function PostService(PostApi, AlertsService) {
    var vm = {
        deletePost: deletePost
    };

    return vm;

    function deletePost(post){
        PostApi.deletePost(post).then(function(result){
            var alert = {
              message: 'Post com sucesso.',
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