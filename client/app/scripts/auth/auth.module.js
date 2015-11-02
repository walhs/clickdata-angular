(function () {
    "use strict";

	angular.module('trackerApp.auth', ['Devise']);

    angular.module('trackerApp.auth').config(function(AuthProvider) {
        AuthProvider.registerPath('http://localhost:3000/users.json');
        AuthProvider.loginPath('http://localhost:3000//users/sign_in.json');
    });
})();