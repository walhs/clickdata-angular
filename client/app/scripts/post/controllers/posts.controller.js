(function () {
  'use strict';

  angular.module('trackerApp.post').controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['PostsService'];

  function PostsCtrl(PostsService) {
    var vc = this;
    vc.vm = PostsService;
  }
})();