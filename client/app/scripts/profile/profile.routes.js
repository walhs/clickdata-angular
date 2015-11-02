(function(){
    angular.module('trackerApp.profile').config(function ($routeProvider) {

      $routeProvider
        .when('/profile/:user_id', {
          templateUrl: 'views/profile.html',
          controller: 'ProfileCtrl',
          controllerAs: 'vc',
          activetab: 'profile'
        });
    });
})();