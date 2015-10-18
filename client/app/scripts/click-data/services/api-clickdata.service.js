angular
 	.module('app.clickdata')
 	.factory('clickDataApi', clickDataApi);

clickDataApi.$inject = [
	'AppAjax'
]

function clickDataApi(AppAjax){
	var vm = {
		list: list,
	};

	return vm;
	
	function list(){
		return AppAjax.get('/api/click_data');
	}
}