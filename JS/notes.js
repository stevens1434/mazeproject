ATTEMPT AT SWITCH STMT
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
________________________________________________________________________________________________________________________________________________________________
GENERAL INFO RE MOVES
// 	// (map[y][x + 1] === 0) { 													//RIGHT - normal
// 	// (map[y][x + 1] === 3) { 													//RIGHT - win
// 	// ((map[y][x + 1] === 7 || map[y][x + 1] === 5) && map[y][x + 2] === 0) { 	//RIGHT jump

// 	// (map[y][x - 1] === 0) { 													//LEFT - normal
// 	// (map[y][x - 1] === 3) {													//LEFT - win
// 	// ((map[y][x - 1] === 7 || map[y][x - 1] === 5) && map[y][x - 2] === 0) {	//LEFT - jump

// 	// (map[y - 1][x] === 0) {													//UP - normal
// 	// (map[y - 1][x] === 3) {													//UP - win
// 	// ((map[y - 1][x] === 7 || map[y - 1][x] === 5) && map[y - 2][x] === 0) {	//UP - jump

	
// 	// (map[y + 1][x] === 0) {													//DOWN - normal
// 	// (map[y + 1][x] === 3) {													//DOWN - win
// 	// ((map[y + 1][x] === 7 || map[y + 1][x] === 5) && map[y + 2][x] === 0) {	//DOWN - jump
// }
________________________________________________________________________________________________________________________________________________________________
FIRE GUN
var p1m1Moves = function () {
	// if (map[y][x] === map[2][2]) {
	// 	var p1gun = true;
	// } else {
	// 	console.log("p1 has gun on m1" + p1gun);
	// }
}
var p1m2Moves = function () {
	// if (map2[y][x] === map2[][]) {
	// 	var p1gun = true;
	// } else {
	// 	console.log("p1 has gun on m2" + p1gun);
	// }
}
var p2m1Moves = function () {
	// if (map[y][x] === map[2][2]) {
	// 	var p2gun = true;
	// 	console.log("p2 has gun on m1" + p2gun);
	// } else {
	// }
}
var p2m2Moves = function () {
	// if (map2[y][x] === map2[][]) {
	// 	var p2gun = true;
	// 	console.log("p2 has gun on m2" + p2gun);
	// } else {
	// }
}




DISTANCE FORMULA

