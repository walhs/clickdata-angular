(function () {
	angular
		.module('trackerApp.post')
		.directive('post', post);


    function post () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/post/directives/post.directive.html',
            scope:{
                post: '=',
                canDelete: '='
            },
            replace: true,
            controller: 'PostCtrl',
            controllerAs: 'vc',
            bindToController: true,
        }
    }
})();