(function () {

  'use strict';

  angular.module('trackerApp.profile')
    .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['$routeParams', 'ProfileService', 'AuthService'];

  function ProfileCtrl($routeParams, ProfileService, AuthService) {
      var vc = this;

      vc.user_id = parseInt($routeParams.user_id);

      vc.vm = ProfileService;
      vc.vm.init(vc.user_id);

      vc.auth = AuthService;
  }

})();