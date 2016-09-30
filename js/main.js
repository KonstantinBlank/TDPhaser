var easystar = new EasyStar.js();

var level = [[0,0,1,0,0],
	         [1,0,1,0,1],
	         [0,0,1,0,0],
	         [0,0,1,1,0],
	         [0,0,0,0,0]];

easystar.setGrid(level);

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	easystar.setAcceptableTiles([0]);
	//easystar.enableCornerCutting();
	easystar.enableDiagonals();
	
	easystar.findPath(0, 0, 4, 0, function( path ) {
	    if (path === null) {
	        console.log("The path to the destination point was not found.");
	    } else {
	      
	    	for (var i = 0; i < path.length; i++)
	    	{
	    		console.log("P: " + i + ", X: " + path[i].x + ", Y: " + path[i].y);
	    	}
	    	
	    }
	});
	
	easystar.calculate();
	
	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;
