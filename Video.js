var Video = (function(){
	var YT_videoID = "";
	var player;
	function set(id) {
		YT_videoID = id;
		player.loadVideoById(id);
	}

	function play() {
		if(player) player.playVideo();
	}


	return {
		init: function() {
			/*
				Load youtube iframe API and make required setup for that
			*/

			// A trick to load script via javascript in browser environment
			var tag = document.createElement('script'); // creates empty script element
	      	tag.src = "https://www.youtube.com/iframe_api"; // add script source as the youtube iframe api script
	      	var firstScriptTag = document.getElementsByTagName('script')[0]; // get a place where script should be inserted on the page
	      	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // insert script

	      	// This function will be ran by youtube API once it has finished loading
	      	// It has to be bound to global object window for it to be available for the youtube API
	      	window.onYouTubeIframeAPIReady = function() {
	      		player = new YT.Player("video", {
         			width: '100%',
				});
	      		WakeUp.start();	      	
	      	}
		},
		set: set,
		play: play
	}
})();
Video.init();