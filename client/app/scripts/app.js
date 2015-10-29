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
      controllerAs: 'vc',
      activetab: 'profile'
    })
    .otherwise({
      redirectTo: '/'
    });
});

angular.module('trackerApp').run(function(AuthService){
  AuthService.init();
})