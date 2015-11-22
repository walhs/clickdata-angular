angular
	.module('trackerApp.clickdata')
	.factory('saveClickDataService', saveClickDataService);

saveClickDataService.$inject = [
	'clickDataApi',
	'TokenService'
]

function saveClickDataService(clickDataApi, TokenService) {
	var vm = {
		save: save,
		saveUrlChange: saveUrlChange
	};

	var lastSavedClickData = {};
	var GATILHO_CHANGE_URL = 'url_change';

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

		_saveClickData(clickdata);
	}

	function _saveClickData(clickdata){
		if(_isNewClickData(clickdata)){

			if(clickdata.gatilho !== GATILHO_CHANGE_URL){
				lastSavedClickData = clickdata;
			}

			clickDataApi.save(clickdata).then(function(result) {
				console.log('Save success: ' + clickdata.gatilho);
			}, function(err){
				alert('Error in clickdata saving ');
				console.error(err);
			});
		}
	}

	function saveUrlChange(currentUrl){
		var clickdata = {
			token_id: TokenService.currentToken.id,
			x: -1,
			y: -1,
			scroll_position: -1,
			url: currentUrl,
			gatilho: GATILHO_CHANGE_URL
		};

		_saveClickData(clickdata);
	}

	function _isNewClickData(clickdata){
		if(clickdata.x){
			return lastSavedClickData.x !== clickdata.x ||
					lastSavedClickData.y !== clickdata.y ||
					lastSavedClickData.scroll_position !== clickdata.scroll_position;
		}
		else{
			return true;
		}
	}
}

