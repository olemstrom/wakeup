var WakeUp = (function(){
	var timeFormat = "hh:mm:ss DD.MM.YYYY";
	var DOM = {
		currentTime : document.querySelector("#current-time")
	}

	function update() {
		var now = moment();

	}
	function start() {
		window.setInterval(function(){
			update();
		}, 1000) // update everything every second
	}


	return {
		start: start
	};
})();

WakeUp.start();