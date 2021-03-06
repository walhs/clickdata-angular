'use strict';

/**
 * @ngdoc overview
 * @name fakeLunchHubApp
 * @description
 * # fakeLunchHubApp
 *
 * Main module of the application.
 */
var app = angular.module('trackerApp', [
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

  app.config(function ($routeProvider) {
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
        controllerAs: 'login',
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
      // .when('/logout', {
      //   templateUrl: 'views/logout.html',
      //   controller: 'LogOutCtrl',
      //   controllerAs: 'logout',
      //   activetab: 'logout'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
