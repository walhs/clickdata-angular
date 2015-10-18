angular
	.module('trackerApp.clickdata')
	.factory('listClickDataService', listClickDataService);

listClickDataService.$inject = [
	'clickDataApi'
]

function listClickDataService(clickDataApi){
	var vm = {
		init: init,
	};

	return vm;

	function init(){
		vm.clickDataArray = [];
		vm.loading = true;
		clickDataApi.list().success(function(result){
			vm.clickDataArray = result;
		}).error(function (error){
			alert("Erro ao listar clickdatas");
		}).finally(function (){
			vm.loading = false;
		});
	}
}