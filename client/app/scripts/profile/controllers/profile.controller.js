(function () {

    'use strict';

    angular.module('trackerApp.profile')
      .controller('ProfileCtrl', ProfileCtrl);

    ProfileCtrl.$inject = ['AuthService'];

    function ProfileCtrl(AuthService) {
        var vc = this;

        vc.auth = AuthService;

        vc.posts = [
            {
                author: {
                    username: 'jumentocelestino'
                },
                content: 'Conteudo de um post'
            }
        ];
    }

})();