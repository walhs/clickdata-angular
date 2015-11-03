(function(){
    'use strict';

    angular
        .module('trackerApp.auth')
        .factory('TokenApi', TokenApi);

    TokenApi.$inject = [
        'AppAjax'
    ]

    function TokenApi(AppAjax){
        var vm = {
            generateToken: generateToken,
            save: save
        };

        return vm;

        function save(token){
            return AppAjax.put('/api/tokens.json', token);
        }

        function generateToken(){
            return AppAjax.post('/api/tokens.json');
        }
    }
})();