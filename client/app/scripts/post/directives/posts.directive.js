(function () {
  'use strict';

  angular
    .module('trackerApp.post')
    .directive('posts', posts);

  function posts() {
    var directive = {
      controller: 'PostsCtrl',
      controllerAs: 'vc',
      restrict: 'E',
      scope: {
        canDelete: '='
      },
      templateUrl: 'scripts/post/directives/posts.directive.html',
      bindToController: true,
    };

    return directive;
  }
})();