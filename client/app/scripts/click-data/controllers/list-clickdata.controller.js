'use strict';

angular.module('app.clickdata')
  .controller('listClickdataController', listClickdataController);

listClickdataController.$inject = [
	'listClickDataService'
]

function listClickdataController (listClickDataService) {
	var vc = this;
	vc.vm = listClickDataService;
	vc.vm.init();
}
