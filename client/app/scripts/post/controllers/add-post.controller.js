(function(){
  'use strict';

  angular.module('trackerApp.post').controller('AddPostCtrl', AddPostCtrl);

  AddPostCtrl.$inject = ['AuthService', 'AddPostService'];

  function AddPostCtrl(AuthService, AddPostService) {
    var vc = this;
    vc.auth = AuthService;

    vc.vm = AddPostService;
  }

})();