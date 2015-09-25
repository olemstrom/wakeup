var WakeUp = (function(){
	/*
		Formatting strings for moment.js
		http://momentjs.com/docs/#/displaying/
	*/

	var formating = {
		timeFormat : "HH:mm:ss",
		inputTimeFormat : "HH:mm"
	}

	/*
		Contains DOM nodes that we are interacting with on the page
		Get started at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
	*/

	var DOM = {
		currentTime : document.querySelector("#current-time"),
		alarmTime   : document.querySelector("#alarm-time"),
		setupTime   : document.querySelector("[name=time]"),
		videoID     : document.querySelector("[name=video-id]"),
		updateSetup : document.querySelector(".setup button")
	}


	/*
		Configuration information for the app. 
		All stored conveniently in one place! 
		Buy now, only for O(1) access time! Cheap, Cheap, Cheap!!!
	*/
	var conf = {
		targetTime: moment(),
		now: moment(),
		youtubeID: ""
	}

	function update() {
		conf.now = moment();
		var now = conf.now;

		DOM.currentTime.innerHTML = now.format(formating.timeFormat);
		DOM.alarmTime.innerHTML = conf.targetTime.format(formating.timeFormat);
		if(timeToWakeUp()) {
			Video.play();
		}
	}

	function timeToWakeUp() {
		return conf.now.isSame(conf.targetTime);
	}

	function configure() {
		conf.targetTime = moment(DOM.setupTime.value, formating.inputTimeFormat);
	}

	function bindEvents() {
		DOM.updateSetup.addEventListener("click", function(event){
			conf.targetTime = moment(DOM.setupTime.value, formating.inputTimeFormat);
			conf.youtubeID = DOM.videoID.value;
			Video.set(conf.youtubeID);
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

