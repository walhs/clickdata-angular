(function () {

	'use strict';

	angular
		.module('trackerApp')
		.controller('AppCtrl', AppCtrl);

	AppCtrl.$inject = [
		'saveClickDataService'
	]

	function AppCtrl(saveClickDataService){
		var vc = this;
		vc.saveClickData = saveClickDataService;
	}

})();