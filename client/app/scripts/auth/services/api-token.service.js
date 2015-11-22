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
            save: save,
            getById: getById
        };

        return vm;

        function save(token){
            var token_update_url = '/api/tokens/' + token.id + '.json';
            return AppAjax.put(token_update_url, token);
        }

        function generateToken(){
            return AppAjax.post('/api/tokens.json');
        }

        function getById(token){
            return AppAjax.get('/api/tokens/' + token.id + '.json');
        }
    }
})();