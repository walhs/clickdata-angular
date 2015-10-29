'use strict';

/**
 * @ngdoc overview
 * @name fakeLunchHubApp
 * @description
 * # fakeLunchHubApp
 *
 * Main module of the application.
 */
angular.module('trackerApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'trackerApp.auth',
  'trackerApp.clickdata',
  'trackerApp.header'
]);

angular.module('trackerApp').config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
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
      controllerAs: 'register',
      activetab: 'register'
    })
    .when('/addPost', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl',
      controllerAs: 'post',
      activetab: 'addPost'
    })
    .when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'ProfileCtrl',
      controllerAs: 'profile',
      activetab: 'profile'
    })
    .otherwise({
      redirectTo: '/'
    });
});

angular.module('trackerApp').run(function(AuthService){
  AuthService.init();
})