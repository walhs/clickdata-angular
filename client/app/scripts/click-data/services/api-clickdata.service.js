angular
 	.module('trackerApp.clickdata')
 	.factory('clickDataApi', clickDataApi);

clickDataApi.$inject = [
	'AppAjax'
]

function clickDataApi(AppAjax){
	var vm = {
		list: list,
		save: save
	};

	return vm;

	function list(){
		return AppAjax.get('/api/click_data');
	}

	function save(data) {
		var params = {
			click_data: data
		}
		return AppAjax.post('/api/click_data.json', params);
	}
}