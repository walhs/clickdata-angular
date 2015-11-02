'use strict';

angular.module('trackerApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'trackerApp.auth',
  'trackerApp.clickdata',
  'trackerApp.header',
  'trackerApp.post',
  'trackerApp.profile',
  'trackerApp.settings'
]);

angular.module('trackerApp').config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'vc',
      activetab: 'main'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LogInCtrl',
      controllerAs: 'vc',
      activetab: 'login'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegisterCtrl',
      controllerAs: 'vc',
      activetab: 'register'
    })
    .when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl',
      controllerAs: 'vc',
      activetab: 'profile'
    })
    .when('/settings', {
      templateUrl: 'views/settings.html',
      controller: 'SettingsCtrl',
      controllerAs: 'vc',
      activetab: 'settings'
    })
    .otherwise({
      redirectTo: '/'
    });
});

angular.module('trackerApp').run(function(AuthService){
  AuthService.init();
});