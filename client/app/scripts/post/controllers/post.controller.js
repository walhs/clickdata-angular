(function () {
  'use strict';

  angular.module('trackerApp.post').controller('PostCtrl', PostCtrl);

  PostCtrl.$inject = ['PostService'];

  function PostCtrl(PostService) {
    var vc = this;
    vc.vm = PostService;
  }
})();