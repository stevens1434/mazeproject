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
					[1,0,0,0,0,1,1,0,1,1,0,7,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1],
					[1,1,0,1,0,1,0,0,0,0,0,5,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1],
					[1,0,0,1,0,1,1,0,1,1,0,6,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1],
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
					[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
					[1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1],
					[1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1],
					[1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1],
					[1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1],
					[1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1],
					[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,7,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,5,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,0,6,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1],
					[1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1],
					[1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1],
					[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1],
					[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1],
					[1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1],
					[1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1],
					[1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],
					[1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1],
					[1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1],
					[1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1],
					[1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1],
					[1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
					[1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1],
					[1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1],
					[1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1],
					[1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1],
					[1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1],
					[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1],
					[1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1],
					[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1],
					[1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1],
					[1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1],
					[1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1],
					[1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,3,0,0,0,1,0,1,1,0,1,1,0,1],
					[1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1],
					[1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1],
					[1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1],
					[1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
					[1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1],
					[1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1],
					[1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
					[1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1],
					[1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
					[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
				];
// 	// var start = [12][12] var end = [2][47] 
var player = 6;				//2  //14//array's, from top to bottom
var player2 = 7;			//46 //11// numbers within teh sub-arrays
var playerWin = false;
var playerLoc = {y: 2, x: 46}
var playerLoc2 = {y: 2, x: 48}
var playerStart = map[playerLoc.y][playerLoc.x]; //used to reset board after modal
var playerStart2 = map[playerLoc2.y][playerLoc2.x]; //used to reset board after modal
var finishLine = {y: 2, x: 47}
var score = 0;
var score2 = 0;
var modalbox = $("#myModal"); //get the modal
var closeModal = $("#button"); //span that closes the modal
// var p1gun = false;
// var p1gun = false;

var drawMap = function () {
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

var p1m1Moves = function () {
	map[playerLoc.y][playerLoc.x] = 0; // changes old location color
	score += 1;
	$("span").remove(); //remove map
	$("br").remove(); //remove map
	$("#score").html("Player One Score: " + score); //display score
}

var p1m2Moves = function () {
	map2[playerLoc.y][playerLoc.x] = 0; // changes old location color
	score += 1;
	$("span").remove(); //remove map
	$("br").remove(); //remove map
	$("#score").html("Player One Score: " + score); //display score
}

var p2m1Moves = function () {
	map[playerLoc2.y][playerLoc2.x] = 0; // changes old location color
	score2 += 1;
	$("span").remove(); //remove map
	$("br").remove(); //remove map
	$("#score2").html("Player Two Score: " + score2); //display score
}

var p2m2Moves = function () {
	map2[playerLoc2.y][playerLoc2.x] = 0; // changes old location color
	score2 += 1;
	$("span").remove(); //remove map
	$("br").remove(); //remove map
	$("#score").html("Player Two Score: " + score2); //display score
}

var locChange = function (playerLoc, direction) { // may need to remove "var player" form script.js
	if (direction === "right") {
		if (playerWin === false) {
			if (map[playerLoc.y][playerLoc.x + 1] === 0) { //normal move
				p1m1Moves();
				map[playerLoc.y][playerLoc.x + 1] = 6; // changes new location color
				playerLoc.x += 1;
				drawMap();
			} else if (map[playerLoc.y][playerLoc.x + 1] === 3) { //win move
				p1m1Moves();
				map[playerLoc.y][playerLoc.x + 1] = 3; // changes new location color
				playerLoc.x += 1;
				modalRun();
			}
		} else {
			if (map2[playerLoc.y][playerLoc.x + 1] === 0) { //normal move
				p1m2Moves();
				map2[playerLoc.y][playerLoc.x + 1] = 6; // changes new location color
				playerLoc.x += 1;
				drawMap2();
			} else if (map2[playerLoc.y][playerLoc.x + 1] === 3) { //win move
				p1m2Moves();
				map2[playerLoc.y][playerLoc.x + 1] = 3; // changes new location color
				playerLoc.x += 1;
				modalRun();
			}
		}
	} else if (direction === "left") {
		if (playerWin === false) {
			if (map[playerLoc.y][playerLoc.x - 1] === 0) {
				p1m1Moves();
				map[playerLoc.y][playerLoc.x - 1] = 6; // changes new location color
				playerLoc.x -= 1;
				drawMap();
			} else if (map[playerLoc.y][playerLoc.x - 1] === 3) { //win move
				p1m1Moves();
				map[playerLoc.y][playerLoc.x - 1] = 3; // changes new location color
				playerLoc.x -= 1;
				modalRun();
			}	
		} else {
			if (map2[playerLoc.y][playerLoc.x - 1] === 0) {
				p1m2Moves();
				map2[playerLoc.y][playerLoc.x - 1] = 6; // changes new location color
				playerLoc.x -= 1;
				drawMap2();
			} else if (map2[playerLoc.y][playerLoc.x - 1] === 3) { //win move
				p1m2Moves();
				map2[playerLoc.y][playerLoc.x - 1] = 3; // changes new location color
				playerLoc.x -= 1;
				modalRun();
			}
		}
	} else if (direction === "up") {
		if (playerWin === false) {
			if (map[playerLoc.y - 1][playerLoc.x] === 0) {
				p1m1Moves();
				map[playerLoc.y - 1][playerLoc.x] = 6; // changes new location color
				playerLoc.y -= 1;
				drawMap();
			} else if (map[playerLoc.y - 1][playerLoc.x] === 3) { //win move
				p1m1Moves();
				map[playerLoc.y - 1][playerLoc.x] = 3; // changes new location color
				playerLoc.y -= 1;
				modalRun();
			}
		} else {
			if (map2[playerLoc.y - 1][playerLoc.x] === 0) {
				p1m2Moves();
				map2[playerLoc.y - 1][playerLoc.x] = 6; // changes new location color
				playerLoc.y -= 1;
				drawMap2();
			} else if (map2[playerLoc.y - 1][playerLoc.x] === 3) { //win move
				p1m2Moves();
				map2[playerLoc.y - 1][playerLoc.x] = 3; // changes new location color
				playerLoc.y -= 1;
				modalRun();
			}
		}
	} else if (direction === "down") {
		if (playerWin === false) {
			if (map[playerLoc.y + 1][playerLoc.x] === 0) {
				p1m1Moves();
				map[playerLoc.y + 1][playerLoc.x] = 6; // changes new location color
				playerLoc.y += 1;
				drawMap();
			} else if (map[playerLoc.y + 1][playerLoc.x] === 3) { //win move
				p1m1Moves();
				map[playerLoc.y + 1][playerLoc.x] = 3; // changes new location color
				playerLoc.y += 1;
				modalRun();
			}
		} else {
			if (map2[playerLoc.y + 1][playerLoc.x] === 0) {
				p1m2Moves();
				map2[playerLoc.y + 1][playerLoc.x] = 6; // changes new location color
				playerLoc.y += 1;
				drawMap2();
			} else if (map2[playerLoc.y + 1][playerLoc.x] === 3) { //win move
				p1m2Moves();
				map2[playerLoc.y + 1][playerLoc.x] = 3; // changes new location color
				playerLoc.y += 1;
				modalRun();
			}
		}


	} if (direction === "d") { //RIGHT
		if (playerWin === false) {
			if (map[playerLoc2.y][playerLoc2.x + 1] === 0) { //normal move
				p2m1Moves();
				map[playerLoc2.y][playerLoc2.x + 1] = 7; // changes new location color
				playerLoc2.x += 1;
				drawMap();
			} else if (map[playerLoc2.y][playerLoc2.x + 1] === 3) { //win move
				p2m1Moves();
				map[playerLoc2.y][playerLoc2.x + 1] = 3; // changes new location color
				playerLoc2.x += 1;
				modalRun2();
			}
		} else {
			if (map2[playerLoc2.y][playerLoc2.x + 1] === 0) { //normal move
				p2m2Moves();
				map2[playerLoc2.y][playerLoc2.x + 1] = 7; // changes new location color
				playerLoc2.x += 1;
				drawMap2();
			} else if (map2[playerLoc2.y][playerLoc2.x + 1] === 3) { //win move
				p2m2Moves();
				map2[playerLoc2.y][playerLoc2.x + 1] = 3; // changes new location color
				playerLoc2.x += 1;
				modalRun2();
			}
		}
	} else if (direction === "a") { //LEFT
		if (playerWin === false) {
			if (map[playerLoc2.y][playerLoc2.x - 1] === 0) {
				p2m1Moves();
				map[playerLoc2.y][playerLoc2.x - 1] = 7; // changes new location color
				playerLoc2.x -= 1;
				drawMap();
			} else if (map[playerLoc2.y][playerLoc2.x - 1] === 3) { //win move
				p2m1Moves();
				map[playerLoc2.y][playerLoc2.x - 1] = 3; // changes new location color
				playerLoc2.x -= 1;
				modalRun2();
			}
		} else {
			if (map2[playerLoc2.y][playerLoc2.x - 1] === 0) {
				p2m2Moves();
				map2[playerLoc2.y][playerLoc2.x - 1] = 7; // changes new location color
				playerLoc2.x -= 1;
				drawMap2();
			} else if (map2[playerLoc2.y][playerLoc2.x - 1] === 3) { //win move
				p2m2Moves();
				map2[playerLoc2.y][playerLoc2.x - 1] = 3; // changes new location color
				playerLoc2.x -= 1;
				modalRun2();
			}
		}
	} else if (direction === "w") { //UP
		if (playerWin === false) {
			if (map[playerLoc2.y - 1][playerLoc2.x] === 0) {
				p2m1Moves();
				map[playerLoc2.y - 1][playerLoc2.x] = 7; // changes new location color
				playerLoc2.y -= 1;
				drawMap();
			} else if (map[playerLoc2.y - 1][playerLoc2.x] === 3) { //win move
				p2m1Moves();
				map[playerLoc2.y - 1][playerLoc2.x] = 3; // changes new location color
				playerLoc2.x -= 1;
				modalRun2();
			}
		} else {
			if (map2[playerLoc2.y - 1][playerLoc2.x] === 0) {
				p2m2Moves();
				map2[playerLoc2.y - 1][playerLoc2.x] = 7; // changes new location color
				playerLoc2.y -= 1;
				drawMap2();
			} else if (map2[playerLoc2.y - 1][playerLoc2.x] === 3) { //win move
				p2m2Moves();
				map2[playerLoc2.y - 1][playerLoc2.x] = 3; // changes new location color
				playerLoc2.x -= 1;
				modalRun2();
			}
		}
	} else if (direction === "s") { //DOWN
		if (playerWin === false) {
			if (map[playerLoc2.y + 1][playerLoc2.x] === 0) {
				p2m1Moves();
				map[playerLoc2.y + 1][playerLoc2.x] = 7; // changes new location color
				playerLoc2.y += 1;
				drawMap();
			} else if (map[playerLoc2.y + 1][playerLoc2.x] === 3) { //win move
				p2m1Moves();
				map[playerLoc2.y + 1][playerLoc2.x] = 3; // changes new location color
				playerLoc2.x += 1;
				modalRun2();
			}
		} else {
			if (map2[playerLoc2.y + 1][playerLoc2.x] === 0) {
				p2m2Moves();
				map2[playerLoc2.y + 1][playerLoc2.x] = 7; // changes new location color
				playerLoc2.y += 1;
				drawMap2();
			} else if (map2[playerLoc2.y + 1][playerLoc2.x] === 3) { //win move
				p2m2Moves();
				map2[playerLoc2.y + 1][playerLoc2.x] = 3; // changes new location color
				playerLoc2.x += 1;
				modalRun2();
			}
		}
	}
}

var pressKey = function(e) {
	if (e.keyCode === 39 || e.keyCode === "39") { //MOVE RIGHT
		locChange(playerLoc, "right");
	} else if (e.keyCode === 37 || e.keyCode === "37") { //MOVE LEFT
		locChange(playerLoc, "left");
	} else if (e.keyCode === 38 || e.keyCode === "38") { //MOVE UP
		locChange(playerLoc, "up");
	} else if (e.keyCode === 40 || e.keyCode === "40") { //MOVE DOWN
		locChange(playerLoc, "down");
	} else if (e.keyCode === 68 || e.keyCode === "68") { //p2 MOVE RIGHT
		locChange(playerLoc2, "d");
	} else if (e.keyCode === 65 || e.keyCode === "65") { //p2 MOVE LEFT
		locChange(playerLoc2, "a");
	} else if (e.keyCode === 87 || e.keyCode === "87") { //p2 MOVE UP
		locChange(playerLoc2, "w");
	} else if (e.keyCode === 83 || e.keyCode === "83") { //p2 MOVE DOWN
		locChange(playerLoc2, "s");
	}
}

// var pressKey = function (e) {
// 	if (playerWin === false || playerWin === "false") {
// 		if (e.keyCode === 39 || e.keyCode === "39") { //MOVE RIGHT
// 			if ((map[y][x + 1] === 7 || map[y][x + 1] === 5) && map[y][x + 2] === 0) { //jump player
// 				p1m1Moves();
// 				map[y][x + 2] = 6;
// 				playerloc.y += 0;
// 				playerloc.x += 2;
// 				x += 2;
// 				drawMap();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 37 || e.keyCode === "37") { //MOVE LEFT
// 			if ((map[y][x - 1] === 7 || map[y][x - 1] === 5) && map[y][x - 2] === 0) {
// 				p1m1Moves();
// 				map[y][x] = 0;
// 				map[y][x - 2] = 6;
// 				playerloc.y += 0;
// 				playerloc.x -= 2;
// 				x -= 2;
// 				drawMap();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 38 || e.keyCode === "38") { //MOVE UP
// 			if ((map[y - 1][x] === 7 || map[y - 1][x] === 5) && map[y - 2][x] === 0) {
// 				p1m1Moves();
// 				map[y][x] = 0;
// 				map[y - 2][x] = 6;
// 				playerloc.y -= 2;
// 				playerloc.x += 0;
// 				y -= 2;
// 				drawMap();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 40 || e.keyCode === "40") {//MOVE DOWN
// 			if ((map[y + 1][x] === 7 || map[y + 1][x] === 5) && map[y + 2][x] === 0) {
// 				p1m1Moves();
// 				map[y][x] = 0;
// 				map[y + 2][x] = 6;
// 				playerloc.y += 2;
// 				playerloc.x += 0;
// 				y += 2;
// 				drawMap();
// 			} else {
// 			}
// 		}
// 	} else {
// 	// MAP NUMBER 2
// 	if (e.keyCode === 39 || e.keyCode === "39") { //MOVE RIGHT
// 		if (map2[y][x + 1] === 0) { //normal move
// 				p1m2Moves();
// 				map2[y][x + 1] = 6;
// 				playerloc.y += 0;
// 				playerloc.x += 1;
// 				x += 1;
// 				drawMap2();
// 			} else if (map2[y][x + 1] === 3) { //winning square
// 				p1m2Moves();
// 				map2[y][x + 1] = 3;
// 				playerloc.y += 0;
// 				playerloc.x += 1;
// 				x += 1;
// 				drawMap2();
// 				modalRun();
// 			} else if ((map2[y][x + 1] === 7 || map2[y][x + 1] === 5) && map2[y][x + 2] === 0) { //jump player
// 				p1m2Moves();
// 				map2[y][x + 2] = 6;
// 				playerloc.y += 0;
// 				playerloc.x += 2;
// 				x += 2;
// 				drawMap2();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 37 || e.keyCode === "37") { //MOVE LEFT
// 			if (map2[y][x - 1] === 0) {
// 				p1m2Moves();
// 				map2[y][x - 1] = 6;
// 				playerloc.y += 0;
// 				playerloc.x -= 1;
// 				x -= 1;
// 				drawMap2();
// 			} else if (map2[y][x - 1] === 3) {
// 				p1m2Moves();
// 				map2[y][x - 1] = 3;
// 				playerloc.y += 0;
// 				playerloc.x -= 1;
// 				x -= 1;
// 				drawMap2();
// 				modalRun();
// 			} else if ((map2[y][x - 1] === 7 || map2[y][x - 1] === 5) && map2[y][x - 2] === 0) {
// 				p1m2Moves();
// 				map2[y][x - 2] = 6;
// 				playerloc.y += 0;
// 				playerloc.x -= 2;
// 				x -= 2;
// 				drawMap2();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 38 || e.keyCode === "38") { //MOVE UP
// 			if (map2[y - 1][x] === 0) {
// 				p1m2Moves();
// 				map2[y - 1][x] = 6;
// 				playerloc.y -= 1;
// 				playerloc.x += 0;
// 				y -= 1;
// 				drawMap2();
// 			} else if (map2[y - 1][x] === 3) {
// 				p1m2Moves();
// 				map2[y - 1][x] = 3;
// 				playerloc.y -= 1;
// 				playerloc.x += 0;
// 				y -= 1;
// 				drawMap2();
// 				modalRun();
// 			} else if ((map2[y - 1][x] === 7 || map2[y - 1][x] === 5) && map2[y - 2][x] === 0) {
// 				p1m2Moves();
// 				map2[y - 2][x] = 6;
// 				playerloc.y -= 2;
// 				playerloc.x += 0;
// 				y -= 2;
// 				drawMap2();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 40 || e.keyCode === "40") {//MOVE DOWN
// 			if (map2[y + 1][x] === 0) {
// 				p1m2Moves();
// 				map2[y + 1][x] = 6;
// 				playerloc.y += 1;
// 				playerloc.x += 0;
// 				y += 1;
// 				drawMap2();
// 			} else if (map2[y + 1][x] === 3) {
// 				p1m2Moves();
// 				map2[y + 1][x] = 3;
// 				playerloc.y += 1;
// 				playerloc.x += 0;
// 				y += 1;
// 				drawMap2();
// 				modalRun();
// 			} else if ((map2[y + 1][x] === 7 || map2[y + 1][x] === 5) && map2[y + 2][x] === 0) {
// 				p1m2Moves();
// 				map2[y + 2][x] = 6;
// 				playerloc.y += 2;
// 				playerloc.x += 0;
// 				y += 2;
// 				drawMap2();
// 			} else {
// 			}
// 		}
// 	}
// }

// var pressKey2 = function (e) {  //PLAYER TWO
// 	if (playerWin === false || playerWin === "false") {	
// 		if (e.keyCode === 68 || e.keyCode === "68") { //MOVE RIGHT
// 			if ((map[y2][x2 + 1] === 6 || map[y2][x2 + 1] === 5) && map[y2][x2 + 2] === 0) {
// 				p2m1Moves();
// 				map[y2][x2 + 2] = 7;
// 				playerloc2.y += 0;
// 				playerloc2.x += 2;
// 				x2 += 2;
// 				drawMap();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 65 || e.keyCode === "65") { //MOVE LEFT
// 			if ((map[y2][x2 - 1] === 6 || map[y2][x2 - 1] === 5) && map[y2][x2 - 2] === 0) {
// 				p2m1Moves();
// 				map[y2][x2 - 2] = 7;
// 				playerloc2.y += 0;
// 				playerloc2.x -= 2;
// 				x2 -= 2;
// 				drawMap();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 87 || e.keyCode === "87") { //MOVE UP
// 			if ((map[y2 - 1][x2] === 6 || map[y2 - 1][x2] === 5) && map[y2 - 2][x2] === 0) {
// 				p2m1Moves();
// 				map[y2 - 2][x2] = 7;
// 				playerloc2.y -= 2;
// 				playerloc2.x += 0;
// 				y2 -= 2;
// 				drawMap();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 83 || e.keyCode === "83") {//MOVE DOWN
// 			if ((map[y2 + 1][x2] === 6 || map[y2 + 1][x2] === 5) && map[y2 + 2][x2] === 0) {
// 				p2m1Moves();
// 				map[y2 + 2][x2] = 7;
// 				playerloc2.y += 2;
// 				playerloc2.x += 0;
// 				y2 += 2;
// 				drawMap();	
// 			} else {
// 		}
// 	}
// 	} else {
// 	// MAP NUMBER 2
// 	if (e.keyCode === 68 || e.keyCode === "68") { //MOVE RIGHT
// 		if (map2[y2][x2 + 1] === 0) { //normal move
// 				p2m2Moves();
// 				map2[y2][x2 + 1] = 7;
// 				playerloc2.y += 0;
// 				playerloc2.x += 1;
// 				x2 += 1;
// 				drawMap2();
// 			} else if (map2[y2][x2 + 1] === 3) { //winning square
// 				p2m2Moves();
// 				map2[y2][x2 + 1] = 3;
// 				playerloc2.y += 0;
// 				playerloc2.x += 1;
// 				x2 += 1;
// 				drawMap2();
// 				modalRun();
// 			} else if ((map2[y2][x2 + 1] === 6 || map2[y2][x2 + 1] === 5) && map2[y2][x2 + 2] === 0) { //jump player
// 				p2m2Moves();
// 				map2[y2][x2 + 2] = 7;
// 				playerloc2.y += 0;
// 				playerloc2.x += 2;
// 				x2 += 2;
// 				drawMap2();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 65 || e.keyCode === "65") { //MOVE LEFT
// 			if (map2[y2][x2 - 1] === 0) {
// 				p2m2Moves();
// 				map2[y2][x2 - 1] = 7;
// 				playerloc2.y += 0;
// 				playerloc2.x -= 1;
// 				x2 -= 1;
// 				drawMap2();
// 			} else if (map2[y2][x2 - 1] === 3) {
// 				p2m2Moves();
// 				map2[y2][x2 - 1] = 3;
// 				playerloc2.y += 0;
// 				playerloc2.x -= 1;
// 				x2 -= 1;
// 				drawMap2();
// 				modalRun();
// 			} else if ((map2[y2][x2 - 1] === 6 || map2[y2][x2 - 1] === 5) && map2[y2][x2 - 2] === 0) {
// 				p2m2Moves();
// 				map2[y2][x2 - 2] = 7;
// 				playerloc2.y += 0;
// 				playerloc2.x -= 2;
// 				x2 -= 2;
// 				drawMap2();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 87 || e.keyCode === "87") { //MOVE UP
// 			if (map2[y2 - 1][x2] === 0) {
// 				p2m2Moves();
// 				map2[y2 - 1][x2] = 7;
// 				playerloc2.y -= 1;
// 				playerloc2.x += 0;
// 				y2 -= 1;
// 				drawMap2();
// 			} else if (map2[y2 - 1][x2] === 3) {
// 				p2m2Moves();
// 				map2[y2 - 1][x2] = 3;
// 				playerloc2.y -= 1;
// 				playerloc2.x += 0;
// 				y2 -= 1;
// 				drawMap2();
// 				modalRun();
// 			} else if ((map2[y2 - 1][x2] === 6 || map2[y2 - 1][x2] === 5) && map2[y2 - 2][x2] === 0) {
// 				p2m2Moves();
// 				map2[y2 - 2][x2] = 7;
// 				playerloc2.y -= 2;
// 				playerloc2.x += 0;
// 				y2 -= 2;
// 				drawMap2();
// 			} else {
// 			}
// 		}
// 		if (e.keyCode === 83 || e.keyCode === "83") {//MOVE DOWN
// 			if (map2[y2 + 1][x2] === 0) {
// 				p2m2Moves();
// 				map2[y2 + 1][x2] = 7;
// 				playerloc2.y += 1;
// 				playerloc2.x += 0;
// 				y2 += 1;
// 				drawMap2();
// 			} else if (map2[y2 + 1][x2] === 3) {
// 				p2m2Moves();
// 				map2[y2 + 1][x2] = 3;
// 				playerloc2.y += 1;
// 				playerloc2.x += 0;
// 				y2 += 1;
// 				drawMap2();
// 				modalRun();
// 			} else if ((map2[y2 + 1][x2] === 6 || map2[y2 + 1][x2] === 5) && map2[y2 + 2][x2] === 0) {
// 				p2m2Moves();
// 				map2[y2 + 2][x2] = 7;
// 				playerloc2.y += 2;
// 				playerloc2.x += 0;
// 				y2 += 2;
// 				drawMap2();
// 			} else {
// 			}
// 		}
// 	}
// }

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
	playerloc = {y: 14, x: 11}
	playerStart = map[playerLoc.y][playerLoc.x];
	y2 = 12;
	x2 = 11;
	playerloc2 = {y: 12, x: 11}
	playerStart2 = map[playerLoc2.y][playerLoc2.x];
	score = 0;
	score2 = 0;
	playerWin = true;
	$("span").remove();
	$("br").remove();
	// drawMap();
	drawMap2();
}

window.addEventListener("keydown", pressKey, true);
// window.addEventListener("keydown", pressKey2, true);
document.getElementById("button").addEventListener("click", closeModal);

})