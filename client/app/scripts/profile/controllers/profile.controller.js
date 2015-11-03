(function () {

  'use strict';

  angular.module('trackerApp.profile')
    .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['$routeParams', 'ProfileService'];

  function ProfileCtrl($routeParams, ProfileService) {
      var vc = this;

      vc.vm = ProfileService;
      vc.vm.init(parseInt($routeParams.user_id));
  }

})();