(function () {
  'use strict';

  angular.module('trackerApp.post').controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['PostsService', 'AuthService'];

  function PostsCtrl(PostsService, AuthService) {
    var vc = this;
    vc.vm = PostsService;
    vc.auth = AuthService;
  }
})();