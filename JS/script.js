//GUN
// var gun = false
	// for player one (if they pick up the gun at X number on the board)
		// if gun === true, then they can shoot if they hold the SHIFT key
// var gun2 = false

// TOO SLOW?


document.addEventListener('DOMContentLoaded', function() {
var map =  [
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,4,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1],
					[1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,3,0,1],
					[1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1],
					[1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1],
					[1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1],
					[1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1],
					[1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1],
					[1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
					[1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1],
					[1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1],
					[1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1],
					[1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1],
					[1,1,0,1,0,1,0,0,0,0,7,5,6,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1],
					[1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1],
					[1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1],
					[1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
					[1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1],
					[1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1],
					[1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1],
					[1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1],
					[1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1],
					[1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1],
					[1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
					[1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
					[1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1],
					[1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1],
					[1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1],
					[1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1],
					[1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1],
					[1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1],
					[1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1],
					[1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1],
					[1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
					[1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1],
					[1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1],
					[1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					[1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1],
					[1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1],
					[1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
					[1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1],
					[1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1],
					[1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
					[1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1],
					[1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1],
					[1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1],
					[1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1],
					[1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
				];
var map2 =  [
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
					[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
					[1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
					[1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1],
					[1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1],
					[1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1],
					[1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1],
					[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,7,5,6,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
					[1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1],
					[1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1],
					[1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1],
					[1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1],
					[1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1],
					[1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
					[1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1],
					[1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1],
					[1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1],
					[1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1],
					[1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
					[1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1],
					[1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1],
					[1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1],
					[1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1],
					[1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1],
					[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1],
					[1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1],
					[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1],
					[1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1],
					[1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1],
					[1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1],
					[1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,3,0,0,0,1,0,1,1,0,1,1,0,1],
					[1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1],
					[1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1],
					[1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1],
					[1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1],
					[1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1],
					[1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1],
					[1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
					[1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
					[1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
				];
// 	// var start = [13][11]
// 	// var end = [2][47] 
var player;
var playerWin = false;
var y = 13; //2 //array's, from top to bottom
var x = 12; //46 // numbers within teh sub-arrays
var y2 = 13;
var x2 = 10;
var playerStart = map[y][x];
var playerStart2 = map[y2][x2];
var finishLine = {y: 2, x: 47}
var playerloc = {y: 13, x: 12}
var playerloc2 = {y: 13, x: 10}
var score = 0;
var score2 = 0;
var modalbox = $("#myModal"); //get the modal
var closeModal = $("#button"); //span that closes the modal
var p1gun = false;
var p1gun = false;

var drawMap = function () {
	// $("span").remove();
	map.forEach(function(arr, index) { 
	    arr.forEach(function(path, i) {
	      var span = document.createElement("span");
	      if (path === 1) {
	        span.textContent = "..B..";
	        span.style.color = "green";
	        span.style.backgroundColor = "green";
	        span.setAttribute("class", "span");
	      } else if (path === 0) {
	        span.textContent = "..B..";
	        span.style.color = "white";
	        span.style.backgroundColor = "white";
	        span.setAttribute("class", "span");
	      } else if (path === 3) {
	        span.textContent = "..B..";
	        span.style.background = "black";
	        span.style.color = "black";
	        span.setAttribute("class", "span");
	      } else if (path === 4) {
	        span.textContent = "..B..";
	        span.style.background = "orange";
	        span.style.color = "orange";
	        span.setAttribute("class", "span");  
	      } else if (path === 5) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "red";
	      	span.style.color = "red";
	      	span.setAttribute("class", "span");
	      } else if (path === 6) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "blue";
	      	span.style.color = "blue";
	      	span.setAttribute("class", "span");
	      } else if (path === 7) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "gold";
	      	span.style.color = "gold";
	      	span.setAttribute("class", "span");
	      } 
	      document.getElementById("map").appendChild(span);
	    });
	    document.getElementById("map").appendChild(document.createElement("br"))
	  })
}
drawMap();
var drawMap2 = function () {
	// $("span").remove();
	map2.forEach(function(arr, index) { 
	    arr.forEach(function(path, i) {
	      var span = document.createElement("span");
	      if (path === 1) {
	        span.textContent = "..B..";
	        span.style.color = "green";
	        span.style.backgroundColor = "green";
	        span.setAttribute("class", "span");
	      } else if (path === 0) {
	        span.textContent = "..B..";
	        span.style.color = "white";
	        span.style.backgroundColor = "white";
	        span.setAttribute("class", "span");
	      } else if (path === 3) {
	        span.textContent = "..B..";
	        span.style.background = "black";
	        span.style.color = "black";
	        span.setAttribute("class", "span");
	      } else if (path === 5) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "red";
	      	span.style.color = "red";
	      	span.setAttribute("class", "span");
	      } else if (path === 6) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "blue";
	      	span.style.color = "blue";
	      	span.setAttribute("class", "span");
	      } else if (path === 7) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "gold";
	      	span.style.color = "gold";
	      	span.setAttribute("class", "span");
	      } 
	      document.getElementById("map").appendChild(span);
	    });
	    document.getElementById("map").appendChild(document.createElement("br"))
	  })
}

// var movePlayer = function () { //this
// 	switch(playerWin) {
// 		case false:
// 		switch(e.keyCode) {
// 			case 39: 
// 				switch(map[y][x+1]) {
// 					case 0:
// 						map[y][x + 1] = 6;
// 						playerloc.y += 0;
// 						playerloc.x += 1;
// 						x += 1;
// 						score += 1;
// 						break;
// 					case 3:
// 						map[y][x + 1] = 3;
// 						playerloc.y += 0;
// 						playerloc.x += 1;
// 						x += 1;
// 						score += 1;
// 						modalRun();

// 				}
// 		}
// 	}
// 	// (map[y][x + 1] === 0) { 													//RIGHT - normal
// 	// (map[y][x + 1] === 3) { 													//RIGHT - win
// 	// ((map[y][x + 1] === 7 || map[y][x + 1] === 5) && map[y][x + 2] === 0) { 	//RIGHT jump

// 	// (map[y][x - 1] === 0) { 													//LEFT - normal
// 	// (map[y][x - 1] === 3) {														//LEFT - win
// 	// ((map[y][x - 1] === 7 || map[y][x - 1] === 5) && map[y][x - 2] === 0) {		//LEFT - jump

// 	// (map[y - 1][x] === 0) {														//UP - normal
// 	// (map[y - 1][x] === 3) {														//UP - win
// 	// ((map[y - 1][x] === 7 || map[y - 1][x] === 5) && map[y - 2][x] === 0) {		//UP - jump

	
// 	// (map[y + 1][x] === 0) {														//DOWN - normal
// 	// (map[y + 1][x] === 3) {														//DOWN - win
// 	// ((map[y + 1][x] === 7 || map[y + 1][x] === 5) && map[y + 2][x] === 0) {		//DOWN - jump
// }

var p1m1Moves = function () {
	// if (map[y][x] === map[2][2]) {
	// 	var p1gun = true;
	// } else {
	// 	console.log("p1 has gun" + p1gun);
	// }
	map[y][x] = 0; // changes old location to pathway
	score += 1;
	$("span").remove(); //remove map
	$("br").remove(); //remove map
	$("#score").html("Player One Score: " + score); //display score
}


var pressKey = function (e) {
	if (playerWin === false || playerWin === "false") {
		if (e.keyCode === 39 || e.keyCode === "39") { //MOVE RIGHT
			if (map[y][x + 1] === 0) { //normal move
				p1m1Moves();
				map[y][x + 1] = 6; // changes new location
				playerloc.y += 0; // loc tracker change
				playerloc.x += 1; // loc tracker change
				x += 1; // location change --- necessary??
				drawMap(); //redraw map
			} else if (map[y][x + 1] === 3) { //winning square
				p1m1Moves();
				map[y][x + 1] = 3;
				playerloc.y += 0;
				playerloc.x += 1;
				x += 1;
				drawMap();
				modalRun();
				// console.log("p1, m1, right, win");
			} else if ((map[y][x + 1] === 7 || map[y][x + 1] === 5) && map[y][x + 2] === 0) { //jump player
				p1m1Moves();
				map[y][x + 2] = 6;
				playerloc.y += 0;
				playerloc.x += 2;
				x += 2;
				drawMap();
				// console.log("p1, m1, right, jump");
			} else {
			}
		}
		if (e.keyCode === 37 || e.keyCode === "37") { //MOVE LEFT
			if (map[y][x - 1] === 0) {
				p1m1Moves();
				map[y][x] = 0;
				map[y][x - 1] = 6;
				playerloc.y += 0;
				playerloc.x -= 1;
				x -= 1;
				drawMap();
				// console.log("p1, m1, left, normal");
			} else if (map[y][x - 1] === 3) {
				p1m1Moves();
				map[y][x] = 0;
				map[y][x - 1] = 3;
				playerloc.y += 0;
				playerloc.x -= 1;
				x -= 1;
				drawMap();
				modalRun();
				// console.log("p1, m1, left, win");
			} else if ((map[y][x - 1] === 7 || map[y][x - 1] === 5) && map[y][x - 2] === 0) {
				p1m1Moves();
				map[y][x] = 0;
				map[y][x - 2] = 6;
				playerloc.y += 0;
				playerloc.x -= 2;
				x -= 2;
				drawMap();
				// console.log("p1, m1, left, jump");
			} else {
			}
		}
		if (e.keyCode === 38 || e.keyCode === "38") { //MOVE UP
			if (map[y - 1][x] === 0) {
				p1m1Moves();
				map[y][x] = 0;
				map[y - 1][x] = 6;
				playerloc.y -= 1;
				playerloc.x += 0;
				y -= 1;
				drawMap();
				// console.log("p1, m1, up, normal");
			} else if (map[y - 1][x] === 3) {
				p1m1Moves();
				map[y][x] = 0;
				map[y - 1][x] = 3;
				playerloc.y -= 1;
				playerloc.x += 0;
				y -= 1;
				$("#score").html("Player One Score: " + score);
				drawMap();
				modalRun();
				// console.log("p1, m1, up, win");
			} else if ((map[y - 1][x] === 7 || map[y - 1][x] === 5) && map[y - 2][x] === 0) {
				p1m1Moves();
				map[y][x] = 0;
				map[y - 2][x] = 6;
				playerloc.y -= 2;
				playerloc.x += 0;
				y -= 2;
				drawMap();
				// console.log("p1, m1, up, jump");
			} else {
			}
		}
		if (e.keyCode === 40 || e.keyCode === "40") {//MOVE DOWN
			if (map[y + 1][x] === 0) {
				p1m1Moves();
				map[y][x] = 0;
				map[y + 1][x] = 6;
				playerloc.y += 1;
				playerloc.x += 0;
				y += 1;
				drawMap();
				// console.log("p1, m1, down, normal");
			} else if (map[y + 1][x] === 3) {
				p1m1Moves();
				map[y][x] = 0;
				map[y + 1][x] = 3;
				playerloc.y += 1;
				playerloc.x += 0;
				y += 1;
				drawMap();
				modalRun();
				// console.log("p1, m1, down, win");
			} else if ((map[y + 1][x] === 7 || map[y + 1][x] === 5) && map[y + 2][x] === 0) {
				p1m1Moves();
				map[y][x] = 0;
				map[y + 2][x] = 6;
				playerloc.y += 2;
				playerloc.x += 0;
				y += 2;
				drawMap();
				// console.log("p1, m1, down, jump");
			} else {
			}
		}
	} else {
	// MAP NUMBER 2
	if (e.keyCode === 39 || e.keyCode === "39") { //MOVE RIGHT
		if (map2[y][x + 1] === 0) { //normal move
			// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y][x + 1] = 6;
				$("span").remove();
				$("br").remove();
				playerloc.y += 0;
				playerloc.x += 1;
				x += 1;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				console.log("p1, m2, right, normal");
			} else if (map2[y][x + 1] === 3) { //winning square
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y][x + 1] = 3;
				$("span").remove();
				$("br").remove();
				playerloc.y += 0;
				playerloc.x += 1;
				x += 1;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				modalRun();
				console.log("p1, m2, right, win");
			} else if ((map2[y][x + 1] === 7 || map2[y][x + 1] === 5) && map2[y][x + 2] === 0) { //jump player
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y][x + 2] = 6;
				$("span").remove();
				$("br").remove();
				playerloc.y += 0;
				playerloc.x += 2;
				x += 2;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				console.log("p1, m2, right, jump");
			} else {
			}
		}
		if (e.keyCode === 37 || e.keyCode === "37") { //MOVE LEFT
			if (map2[y][x - 1] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y][x - 1] = 6;
				$("span").remove();
				$("br").remove();
				playerloc.y += 0;
				playerloc.x -= 1;
				x -= 1;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				console.log("p1, m2, left, normal");
			} else if (map2[y][x - 1] === 3) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y][x - 1] = 3;
				$("span").remove();
				$("br").remove();
				playerloc.y += 0;
				playerloc.x -= 1;
				x -= 1;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				modalRun();
				console.log("p1, m2, left, win");
			} else if ((map2[y][x - 1] === 7 || map2[y][x - 1] === 5) && map2[y][x - 2] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y][x - 2] = 6;
				$("span").remove();
				$("br").remove();
				playerloc.y += 0;
				playerloc.x -= 2;
				x -= 2;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				console.log("p1, m2, left, jump");
			} else {
			}
		}
		if (e.keyCode === 38 || e.keyCode === "38") { //MOVE UP
			if (map2[y - 1][x] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y - 1][x] = 6;
				$("span").remove();
				$("br").remove();
				playerloc.y -= 1;
				playerloc.x += 0;
				y -= 1;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				console.log("p1, m2, up, normal");
			} else if (map2[y - 1][x] === 3) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y - 1][x] = 3;
				$("span").remove();
				$("br").remove();
				playerloc.y -= 1;
				playerloc.x += 0;
				y -= 1;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				modalRun();
				console.log("p1, m2, up, win");
			} else if ((map2[y - 1][x] === 7 || map2[y - 1][x] === 5) && map2[y - 2][x] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y - 2][x] = 6;
				$("span").remove();
				$("br").remove();
				playerloc.y -= 2;
				playerloc.x += 0;
				y -= 2;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				console.log("p1, m2, up, jump");
			} else {
			}
		}
		if (e.keyCode === 40 || e.keyCode === "40") {//MOVE DOWN
			if (map2[y + 1][x] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y + 1][x] = 6;
				$("span").remove();
				$("br").remove();
				playerloc.y += 1;
				playerloc.x += 0;
				y += 1;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				console.log("p1, m2, down, normal");
			} else if (map2[y + 1][x] === 3) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y + 1][x] = 3;
				$("span").remove();
				$("br").remove();
				playerloc.y += 1;
				playerloc.x += 0;
				y += 1;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				modalRun();
				console.log("p1, m2, down, win");
			} else if ((map2[y + 1][x] === 7 || map2[y + 1][x] === 5) && map2[y + 2][x] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p1gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y][x] = 0;
				map2[y + 2][x] = 6;
				$("span").remove();
				$("br").remove();
				playerloc.y += 2;
				playerloc.x += 0;
				y += 2;
				score += 1;
				$("#score").html("Player One Score: " + score);
				drawMap2();
				console.log("p1, m2, down, jump");
			} else {
			}
		}
	}
	console.log(playerWin);
}











var pressKey2 = function (e) {  //PLAYER TWO
	if (playerWin === false || playerWin === "false") {	
		if (e.keyCode === 68 || e.keyCode === "68") { //MOVE RIGHT
			if (map[y2][x2 + 1] === 0) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2][x2 + 1] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x += 1;
				x2 += 1;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
			} else if (map[y2][x2 + 1] === 3) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2][x2 + 1] = 3;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x += 1;
				x2 += 1;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
				modalRun2();
			} else if ((map[y2][x2 + 1] === 6 || map[y2][x2 + 1] === 5) && map[y2][x2 + 2] === 0) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2][x2 + 2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x += 2;
				x2 += 2;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
			} else {
			}
		}
		if (e.keyCode === 65 || e.keyCode === "65") { //MOVE LEFT
			if (map[y2][x2 - 1] === 0) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2][x2 - 1] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x -= 1;
				x2 -= 1;
				score2 += 1;
				$("#score2").html("your score: " + score2);
				drawMap();
			} else if (map[y2][x2 - 1] === 3) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2][x2 - 1] = 3;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x -= 1;
				x2 -= 1;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
				modalRun2();
			} else if ((map[y2][x2 - 1] === 6 || map[y2][x2 - 1] === 5) && map[y2][x2 - 2] === 0) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2][x2 - 2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x -= 2;
				x2 -= 2;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
			} else {
			}
		}
		if (e.keyCode === 87 || e.keyCode === "87") { //MOVE UP
			if (map[y2 - 1][x2] === 0) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2 - 1][x2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y -= 1;
				playerloc2.x += 0;
				y2 -= 1;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
			} else if (map[y2 - 1][x2] === 3) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2 - 1][x2] = 3;
				$("span").remove();
				$("br").remove();
				playerloc2.y -= 1;
				playerloc2.x += 0;
				y2 -= 1;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
				modalRun2();
			} else if ((map[y2 - 1][x2] === 6 || map[y2 - 1][x2] === 5) && map[y2 - 2][x2] === 0) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2 - 2][x2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y -= 2;
				playerloc2.x += 0;
				y2 -= 2;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
			} else {
			}
		}
		if (e.keyCode === 83 || e.keyCode === "83") {//MOVE DOWN
			if (map[y2 + 1][x2] === 0) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2 + 1][x2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 1;
				playerloc2.x += 0;
				y2 += 1;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
			} else if (map[y2 + 1][x2] === 3) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2 + 1][x2] = 3;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 1;
				playerloc2.x += 0;
				y2 += 1;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();
				modalRun2();
			} else if ((map[y2 + 1][x2] === 6 || map[y2 + 1][x2] === 5) && map[y2 + 2][x2] === 0) {
				// if (map[y][x] === map[2][2]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map[y2][x2] = 0;
				map[y2 + 2][x2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 2;
				playerloc2.x += 0;
				y2 += 2;
				score2 += 1;
				$("#score2").html("Player 2 score: " + score2);
				drawMap();	
			} else {
		}
	}
	} else {
	// MAP NUMBER 2
	if (e.keyCode === 68 || e.keyCode === "68") { //MOVE RIGHT
		if (map2[y2][x2 + 1] === 0) { //normal move
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2][x2 + 1] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x += 1;
				x2 += 1;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				console.log("p2, m2, right, normal");
			} else if (map2[y2][x2 + 1] === 3) { //winning square
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2][x2 + 1] = 3;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x += 1;
				x2 += 1;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				modalRun();
				console.log("p2, m2, right, win");
			} else if ((map2[y2][x2 + 1] === 6 || map2[y2][x2 + 1] === 5) && map2[y2][x2 + 2] === 0) { //jump player
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2][x2 + 2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x += 2;
				x2 += 2;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				console.log("p2, m2, right, jump");
			} else {
			}
		}
		if (e.keyCode === 65 || e.keyCode === "65") { //MOVE LEFT
			if (map2[y2][x2 - 1] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2][x2 - 1] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x -= 1;
				x2 -= 1;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				console.log("p2, m2, left, normal");
			} else if (map2[y2][x2 - 1] === 3) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2][x2 - 1] = 3;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x -= 1;
				x2 -= 1;
				score2 += 1;
				$("#score").html("Player 2 Score: " + score2);
				drawMap2();
				modalRun();
				console.log("p2, m2, left, win");
			} else if ((map2[y2][x2 - 1] === 6 || map2[y2][x2 - 1] === 5) && map2[y2][x2 - 2] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2][x2 - 2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 0;
				playerloc2.x -= 2;
				x2 -= 2;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				console.log("p2, m2, left, jump");
			} else {
			}
		}
		if (e.keyCode === 87 || e.keyCode === "87") { //MOVE UP
			if (map2[y2 - 1][x2] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2 - 1][x2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y -= 1;
				playerloc2.x += 0;
				y2 -= 1;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				console.log("p2, m2, up, normal");
			} else if (map2[y2 - 1][x2] === 3) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2 - 1][x2] = 3;
				$("span").remove();
				$("br").remove();
				playerloc2.y -= 1;
				playerloc2.x += 0;
				y2 -= 1;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				modalRun();
				console.log("p2, m2, up, win");
			} else if ((map2[y2 - 1][x2] === 6 || map2[y2 - 1][x2] === 5) && map2[y2 - 2][x2] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2 - 2][x2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y -= 2;
				playerloc2.x += 0;
				y2 -= 2;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				console.log("p2, m2, up, jump");
			} else {
			}
		}
		if (e.keyCode === 83 || e.keyCode === "83") {//MOVE DOWN
			if (map2[y2 + 1][x2] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2 + 1][x2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 1;
				playerloc2.x += 0;
				y2 += 1;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				console.log("p2, m2, down, normal");
			} else if (map2[y2 + 1][x2] === 3) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2 + 1][x2] = 3;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 1;
				playerloc2.x += 0;
				y2 += 1;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				modalRun();
				console.log("p2, m2, down, win");
			} else if ((map2[y2 + 1][x2] === 6 || map2[y2 + 1][x2] === 5) && map2[y2 + 2][x2] === 0) {
				// if (map[y][x] === map[][]) {
				// 	var p2gun = true;
				// } else {
				// 	console.log("p1 has gun" + p1gun);
				// }
				map2[y2][x2] = 0;
				map2[y2 + 2][x2] = 7;
				$("span").remove();
				$("br").remove();
				playerloc2.y += 2;
				playerloc2.x += 0;
				y2 += 2;
				score2 += 1;
				$("#score2").html("Player 2 Score: " + score2);
				drawMap2();
				console.log("p2, m2, down, jump");
			} else {
			}
		}
	}
}

var modalRun = function () {
	$("#myModal").css("display", "block");
	$("#modalheader").html("Congrats  Player  1,  You  Win!");
	$("#yourscore").html("You  won  with  a  score  of:    " + score);
}

var modalRun2 = function () {
	$("#myModal").css("display", "block");
	$("#modalheader").html("Congrats  Player  2,  You  Win!");
	$("#yourscore").html("You  won  with  a  score  of:    " + score2);
}

var closeModal = function () {
	$("#myModal").css("display", "none"); //closes the modal
	y = 13; 
	x = 12;
	playerloc.y += 13;
	playerloc.x += 12;
	playerStart = map[y][x];
	y2 = 13;
	x2 = 10;
	playerloc.y += 13;
	playerloc.x += 10;
	playerStart2 = map[y2][x2];
	score = 0;
	score2 = 0;
	playerWin = true;
	$("span").remove();
	$("br").remove();
	// drawMap();
	drawMap2();
}

window.addEventListener("keydown", pressKey, true);
window.addEventListener("keydown", pressKey2, true);
document.getElementById("button").addEventListener("click", closeModal);

})
