var WakeUp = (function(){
	var formating = {
		timeFormat : "HH:mm:ss",
		inputTimeFormat : "HH:mm"
	}

	var DOM = {
		currentTime : document.querySelector("#current-time"),
		alarmTime   : document.querySelector("#alarm-time"),
		setupTime   : document.querySelector("[name=time]"),
		updateSetup : document.querySelector(".setup button")
	}

	var conf = {
		targetTime: moment(),
		youtubeID: ""
	}

	function update() {
		var now = moment();
		DOM.currentTime.innerHTML = now.format(formating.timeFormat);
		DOM.alarmTime.innerHTML = conf.targetTime.format(formating.timeFormat);		
	}

	function timeToWakeUp() {

	}

	function configure() {
		conf.targetTime = moment(DOM.setupTime.value, formating.inputTimeFormat);
	}

	function bindEvents() {
		DOM.updateSetup.addEventListener("click", function(event){
			conf.targetTime = moment(DOM.setupTime.value, formating.inputTimeFormat);
			console.log(conf);
		});
	}

	function start() {
		bindEvents();

		DOM.setupTime.value = conf.targetTime.format(formating.inputTimeFormat);

		window.setInterval(function(){
			update();
		}, 1000) // update everything every second
	}


	return {
		start: start
	};
})();

WakeUp.start();