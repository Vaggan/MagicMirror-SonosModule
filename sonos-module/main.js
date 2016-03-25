var sonosModule = {
	intervalId: null,
	apiBase: sonosModuleConfig.interval || 'http://localhost:5005/',
	updateInterval: sonosModuleConfig.interval || 60000,
	showPausedZone: sonosModuleConfig.showPausedZone == null ? true :  sonosModuleConfig.showPausedZone,
}

sonosModule.GetZones = function(){
	$.ajax({
		type: 'GET',
		url: sonosModule.apiBase + 'zones',
		dataType: 'json',
		data: '',
		success: function (data) {
			var text = '<ul>';

			$.each(data, function (i, item) {
				var room = item.coordinator.roomName;
				var state = item.coordinator.state.zoneState;
				var artist = item.coordinator.state.currentTrack.artist;
				var track = item.coordinator.state.currentTrack.title;
			 	
			 	if(item.members.length > 1){
			 		room = '';
			 		$.each(item.members, function (j, member) {
			 			room += member.roomName + ', ';
			 		});
			 		room = room.slice(0, -2);
			 	}

				if(state === 'PLAYING')
		  			text += '<li>' + room  + ': ' + artist + ' - ' + track + '</li>';
				else{
					if(sonosModule.showPausedZone)
						text += '<li>' + room  + ': </li>';
					else
						return true;
				}
			});

			text += '</ul>'
			$('.sonosModule').updateWithText(text, 4000);

		}.bind(this),
		error: function (xhr, status, error) {
			console.log('Error: sonos-module: Could not get zones: ' + xhr.status + ': ' + xhr.responseText);
		}
	});
}

sonosModule.GetZones();

sonosModule.intervalId = setInterval(function () {
	sonosModule.GetZones();
}.bind(this), sonosModule.updateInterval);