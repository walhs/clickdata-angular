(function () {
	angular
		.module('trackerApp.post')
		.directive('post', post);


    function post () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/post/directives/post.directive.html',
            scope:{
                post: '='
            },
            // replace: true,
            // controller: 'PostCtrl',
            // controllerAs: 'vc'
        }
    }
})();