(function () {
  'use strict';

  angular.module('trackerApp.post').factory('PostsService', PostsService);

  PostsService.$inject = [];

  function PostsService() {
    var vm = {
      init: init,
      removePostFromList: removePostFromList
    };

    return vm;

    function init(options){
      setPosts(options.posts);
      vm.user_id = options.user_id;
    }

    function setPosts(posts) {
        vm.posts = posts;
    }

    function removePostFromList(post){
      var postIndex = CD.indexOf_byProperty(vm.posts, 'id', post.id);
      if(postIndex >= 0){
        vm.posts.splice(postIndex, 1);
      }
    }
  }
})();