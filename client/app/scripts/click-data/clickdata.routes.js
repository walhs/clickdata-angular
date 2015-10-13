angular.module('app.clickdata').config(function ($routeProvider) {
    $routeProvider
      .when('/clickdata/list', {
        templateUrl: 'views/listClickData.html',
        controller: 'listClickdataController',
        controllerAs: 'vc'
      })
  });