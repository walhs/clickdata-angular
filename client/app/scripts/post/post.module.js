(function () {
    'use strict';

	angular.module('trackerApp.post', ['appajax']);

    angular.module('trackerApp.post').config(function ($routeProvider) {
      $routeProvider
        .when('/addPost', {
          templateUrl: 'views/post.html',
          controller: 'AddPostCtrl',
          controllerAs: 'vc',
          activetab: 'addPost'
        });
    });
})();