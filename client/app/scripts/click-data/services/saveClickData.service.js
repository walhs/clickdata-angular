angular
	.module('trackerApp.clickdata')
	.factory('saveClickDataService', saveClickDataService);

saveClickDataService.$inject = [
	'clickDataApi',
	'TokenService'
]

function saveClickDataService(clickDataApi, TokenService) {
	var vm = {
		save: save
	};

	var lastSavedClickData = {};

	return vm;

	function save(gatilho) {
		var clickdata = {
			token_id: TokenService.currentToken.id,
			x: event.clientX,
			y: event.clientY,
			scroll_position: document.body.scrollTop,
			url: window.location.href
		};

		if(gatilho){
			clickdata.gatilho = gatilho;
		}

		if(_isNewClickData(clickdata)){
			lastSavedClickData = clickdata;
			clickDataApi.save(clickdata).then(function(result) {
				console.log('Save success: ' + result);
			}, function(err){
				alert('Error in clickdata saving ');
				console.error(err);
			});
		}
	}

	function _isNewClickData(clickdata){
		return lastSavedClickData.x !== clickdata.x ||
				lastSavedClickData.y !== clickdata.y ||
				lastSavedClickData.scroll_position !== clickdata.scroll_position;
	}
}

