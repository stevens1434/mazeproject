document.addEventListener('DOMContentLoaded', function() {
var map =  [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1],
				[1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,3,0,1],
				[1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1],
				[1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1],
				[1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1],
				[1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1],
				[1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1],
				[1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1],
				[1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1],
				[1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1],
				[1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1],
				[1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1],
				[1,0,1,1,0,1,1,0,0,0,7,5,6,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1],
				[1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1],
				[1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1],
				[1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1],
				[1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1],
				[1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1],
				[1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1],
				[1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1],
				[1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1],
				[1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1],
				[1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1],
				[1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1],
				[1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1],
				[1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1],
				[1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1],
				[1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1],
				[1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1],
				[1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1],
				[1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1],
				[1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1],
				[1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
				[1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1],
				[1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1],
				[1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
				[1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1],
				[1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1],
				[1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
				[1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1],
				[1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1],
				[1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1],
				[1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1],
				[1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1],
				[1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1],
				[1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1],
				[1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
				];
// 	// var start = [13][11]
// 	// var end = [2][47] 
var player;
var y = 2; //array's, from top to bottom
var x = 46; // numbers within teh sub-arrays
var y2 = 13;
var x2 = 10;
var playerStart = map[y][x];
var playerStart2 = map[y2][x2];
var score = 0;
var score2 = 0;
// var leftPress = false; //this and next three: optional, might jsut do if-else statments for moves.
// var rightPress = false;
// var upPress = false;
// var downPress = false;
var modalbox = $("#myModal"); //get the modal
var closeModal = $("#button"); //span that closes the modal


// console.log(playerStart);
// console.log(map[13])
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
	        // $(".span").style.height = "10px";
	        // $(".span").style.width = "10px";
	        // $(document).ready(function() {
	        // 	$(".span").style.height = "10px";
	        // });
	      } else if (path === 0) {
	        span.textContent = "..B..";
	        span.style.color = "white";
	        span.style.backgroundColor = "white";
	        span.setAttribute("class", "span");
	      } else if (path === 3) {
	        span.textContent = "..B..";
	        span.style.background = "gold";
	        span.style.color = "gold";
	        span.setAttribute("class", "span");
	      } else if (path === 5) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "red";
	      	span.style.color = "red";
	      	span.setAttribute("class", "span");
	      } else if (path === 4) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "gold";
	      	span.style.color = "gold";
	      	span.setAttribute("class", "span");
	      } else if (path === 6) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "blue";
	      	span.style.color = "blue";
	      	span.setAttribute("class", "span");
	      } else if (path === 7) {
	      	span.textContent = "..B..";
	      	span.style.backgroundColor = "yellow";
	      	span.style.color = "yellow";
	      	span.setAttribute("class", "span");
	      } 
	      document.getElementById("map").appendChild(span);
	    });
	    document.getElementById("map").appendChild(document.createElement("br"))
	  })
}
drawMap();

// DIV WITH ABSOLUTE PIXEL VALUES, MAX WIDTH AND MAX HEIGHT ALSO USE MAX AND MIN WIDTH FOR SCALING ISSUES

var pressKey = function (e) {
	if (e.keyCode === 39 || e.keyCode === "39") { //MOVE RIGHT
		//check to see if you can move there use map
		//splice
		if (map[y][x + 1] === 0) { //normal move
			map[y][x] = 0;
			map[y][x + 1] = 6;
			$("span").remove();
			$("br").remove();
			drawMap();
			x += 1;
			score += 1;
			$("#score").html("Player One Score: " + score);
		} else if (map[y][x + 1] === 3) { //winning square
			map[y][x] = 0;
			map[y][x + 1] = 4;
			$("span").remove();
			$("br").remove();
			drawMap();
			x += 1;
			score += 1;
			$("#score").html("Player One Score: " + score);
			modalRun();
			// checkWinner();
		} else if (map[y][x + 1] === 7 && map[y][x + 2] === 0) { //jump player
			map[y][x] = 0;
			map[y][x + 2] = 6;
			$("span").remove();
			$("br").remove();
			drawMap();
			x += 2;
			score += 1;
			$("#score").html("Player One Score: " + score);
		} else {
		}
	}
	if (e.keyCode === 37 || e.keyCode === "37") { //MOVE LEFT
		//check to see if you can move there use map
		//splice
		if (map[y][x - 1] === 0) {
			map[y][x] = 0;
			map[y][x - 1] = 6;
			$("span").remove();
			$("br").remove();
			drawMap();
			x -= 1;
			score += 1;
			$("#score").html("Player One Score: " + score);
		} else if (map[y][x - 1] === 3) {
			map[y][x] = 0;
			map[y][x - 1] = 4;
			$("span").remove();
			$("br").remove();
			drawMap();
			x -= 1;
			score += 1;
			modalRun();
			// checkWinner();
			$("#score").html("Player One Score: " + score);
		} else if (map[y][x - 1] === 7 && map[y][x - 2] === 0) {
			map[y][x] = 0;
			map[y][x - 2] = 6;
			$("span").remove();
			$("br").remove();
			drawMap();
			x -= 2;
			score += 1;
			$("#score").html("Player One Score: " + score);
		} else {
		}
	}
	if (e.keyCode === 38 || e.keyCode === "38") { //MOVE UP
		//check to see if you can move there use map
		//splice
		if (map[y - 1][x] === 0) {
			map[y][x] = 0;
			map[y - 1][x] = 6;
			$("span").remove();
			$("br").remove();
			drawMap();
			y -= 1;
			score += 1;
			$("#score").html("Player One Score: " + score);
		} else if (map[y - 1][x] === 3) {
			map[y][x] = 0;
			map[y - 1][x] = 4;
			$("span").remove();
			$("br").remove();
			drawMap();
			y -= 1;
			score += 1;
			$("#score").html("Player One Score: " + score);
			modalRun();
			// checkWinner();
		} else if (map[y - 1][x] === 7 && map[y - 2][x] === 0) {
			map[y][x] = 0;
			map[y - 2][x] = 6;
			$("span").remove();
			$("br").remove();
			drawMap();
			y -= 2;
			score += 1;
			$("#score").html("Player One Score: " + score);
		} else {
		}
	}
	if (e.keyCode === 40 || e.keyCode === "40") {//MOVE DOWN
		//check to see if you can move there use map
		//splice
		if (map[y + 1][x] === 0) {
			map[y][x] = 0;
			map[y + 1][x] = 6;
			$("span").remove();
			$("br").remove();
			drawMap();
			y += 1;
			score += 1;
			$("#score").html("Player One Score: " + score);
		} else if (map[y + 1][x] === 3) {
			map[y][x] = 0;
			map[y + 1][x] = 4;
			$("span").remove();
			$("br").remove();
			drawMap();
			y += 1;
			score += 1;
			$("#score").html("Player One Score: " + score);
			modalRun();
			// checkWinner();
		} else if (map[y + 1][x] === 7 && map[y + 2][x] === 0) {
			map[y][x] = 0;
			map[y + 2][x] = 6;
			$("span").remove();
			$("br").remove();
			drawMap();
			y += 2;
			score += 1;
			$("#score").html("Player One Score: " + score);
		} else {
		}
	}
}

var pressKey2 = function (e) {
	if (e.keyCode === 68 || e.keyCode === "68") { //MOVE RIGHT
		//check to see if you can move there use map
		//splice
		if (map[y2][x2 + 1] === 0) {
			map[y2][x2] = 0;
			map[y2][x2 + 1] = 7;
			$("span").remove();
			$("br").remove();
			drawMap();
			x2 += 1;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
		} else if (map[y2][x2 + 1] === 3) {
			map[y2][x2] = 0;
			map[y2][x2 + 1] = 4;
			$("span").remove();
			$("br").remove();
			drawMap();
			x2 += 1;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
			modalRun2();
			// checkWinner();
		} else if (map[y2][x2 + 1] === 6 && map[y2][x2 + 2] === 0) {
			map[y2][x2] = 0;
			map[y2][x2 + 2] = 7;
			$("span").remove();
			$("br").remove();
			drawMap();
			x2 += 2;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
		} else {
		}
	}
	if (e.keyCode === 65 || e.keyCode === "65") { //MOVE LEFT
		//check to see if you can move there use map
		//splice
		if (map[y2][x2 - 1] === 0) {
			map[y2][x2] = 0;
			map[y2][x2 - 1] = 7;
			$("span").remove();
			$("br").remove();
			drawMap();
			x2 -= 1;
			score2 += 1;
			$("#score2").html("your score: " + score2);
		} else if (map[y2][x2 - 1] === 3) {
			map[y2][x2] = 0;
			map[y2][x2 - 1] = 4;
			$("span").remove();
			$("br").remove();
			drawMap();
			x2 -= 1;
			score2 += 1;
			modalRun2();
			// checkWinner();
			$("#score2").html("Player 2 score: " + score2);
		} else if (map[y2][x2 - 1] === 6 && map[y2][x2 - 2] === 0) {
			map[y2][x2] = 0;
			map[y2][x2 - 2] = 7;
			$("span").remove();
			$("br").remove();
			drawMap();
			x2 -= 2;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
		} else {
		}
	}
	if (e.keyCode === 87 || e.keyCode === "87") { //MOVE UP
		//check to see if you can move there use map
		//splice
		if (map[y2 - 1][x2] === 0) {
			map[y2][x2] = 0;
			map[y2 - 1][x2] = 7;
			$("span").remove();
			$("br").remove();
			drawMap();
			y2 -= 1;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
		} else if (map[y2 - 1][x2] === 3) {
			map[y2][x2] = 0;
			map[y2 - 1][x2] = 4;
			$("span").remove();
			$("br").remove();
			drawMap();
			y2 -= 1;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
			modalRun2();
			// checkWinner();
		} else if (map[y2 - 1][x2] === 6 && map[y2 - 2][x2] === 0) {
			map[y2][x2] = 0;
			map[y2 - 2][x2] = 7;
			$("span").remove();
			$("br").remove();
			drawMap();
			y2 -= 2;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
		} else {
		}
	}
	if (e.keyCode === 83 || e.keyCode === "83") {//MOVE DOWN
		//check to see if you can move there use map
		//splice
		if (map[y2 + 1][x2] === 0) {
			map[y2][x2] = 0;
			map[y2 + 1][x2] = 7;
			$("span").remove();
			$("br").remove();
			drawMap();
			y2 += 1;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
		} else if (map[y2 + 1][x2] === 3) {
			map[y2][x2] = 0;
			map[y2 + 1][x2] = 4;
			$("span").remove();
			$("br").remove();
			drawMap();
			y2 += 1;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
			modalRun2();
			// checkWinner();
		} else if (map[y2 + 1][x2] === 6 && map[y2 + 2][x2] === 0) {
			map[y2][x2] = 0;
			map[y2 + 2][x2] = 7;
			$("span").remove();
			$("br").remove();
			drawMap();
			y2 += 2;
			score2 += 1;
			$("#score2").html("Player 2 score: " + score2);
		} else {
		}
	}
}

// WHEN COMPLETE IT RUNS CHECKWINNER() AFTER CHANGING THE "E" TO A "6" OR "7" SO IT DOESN'T RECOGNIZE A WINNER
// var checkWinner = function () {
// 		if (map[y][x + 1] === 3 || map[y][x - 1] === 3 || map[y - 1][x] === 3 || map[y + 1][x] === 3) {
// 			console.log("Player 1 wins!");
// 			modalRun();
// 		} else if (map[y2 + 1][x2] === 3 || map[y2 - 1][x2] === 3 || map[y2][x2 - 1] === 3 || map[y2][x2 + 1] === 3) {
// 			console.log("Player 2 wins!");
// 			modalRun2();
// 		} else {
// 			console.log("no winner yet");
// 		}
// 	}

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
	$("#myModal").css("display", "none");
	y = 2;
	x = 46;
	y2 = 13;
	x2 = 10;
	playerStart = map[y][x];
	playerStart2 = map[y2][x2];
	score = 0;
	score2 = 0;
	$("span").remove();
	$("br").remove();
	drawMap();
}

window.addEventListener("keydown", pressKey, true);
window.addEventListener("keydown", pressKey2, true);
document.getElementById("button").addEventListener("click", closeModal);
})
