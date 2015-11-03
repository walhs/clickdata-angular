(function () {
    angular
        .module('trackerApp.clickdata')
        .directive('gatilho', gatilho);

    gatilho.$inject = ['saveClickDataService'];

    function gatilho(saveClickDataService) {
        return {
            restrict: 'A',
            scope: {},
            link: link
            // controller: 'GatilhoCtrl',
        }

        function link(scope, element, attrs){
            var descricao_diretiva =  attrs.gatilho;

            function registraGatilho(){
                saveClickDataService.save(descricao_diretiva);
            }

            element.on( "click", registraGatilho );
        }
    }
})();