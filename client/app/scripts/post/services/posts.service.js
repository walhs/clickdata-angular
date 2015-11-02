(function () {
  'use strict';

  angular.module('trackerApp.post').factory('PostsService', PostsService);

  PostsService.$inject = [];

  function PostsService() {
    var vm = {
      setPosts: setPosts
    };

    return vm;

    function setPosts(posts) {
        vm.posts = posts;
      }
    }
})();