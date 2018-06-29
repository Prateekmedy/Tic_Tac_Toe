$(document).ready(function(){

	var playerGoti;
	var computerGoti;
	var yourTurn = true;
	var playerTurn = [];
	var computerTurn = [];
	var winChances = [[1,2,3],[1,5,9],[1,4,7],[2,5,8],[3,6,9],[4,5,6],[7,8,9],[3,5,7]];
	var chance = 0;
	var id = "";
	var gameOver = false;

	$("#main-div").hide();
	$("#back").hide();
	$("#result").hide();

	$("#result").click(function(){
   		 $("#main-div").show();
	 	 $("#back").show();
   		 $("#result").hide();
 	 });

	$("#cross").click(function(){
		$("#main-div").show();
		$("#back").show();
		$("#welcome").hide();
		playerGoti = "X";
		computerGoti = "O";
	});

	$("#ooo").click(function(){
		$("#main-div").show();
		$("#back").show();
		$("#welcome").hide();
		playerGoti = "O";
		computerGoti = "X";
	});

	$("#back").click(function(){
		$("#main-div").hide();
		$("#back").hide();
		$("#welcome").show();
	});

	$(".block").click(function(){
		gameOver = false;
		id = "Player";
		var fillSpot = $(this).attr("id");
		var spotText = $("#"+fillSpot).text();
		if(spotText===""){
			$("#"+fillSpot).html(playerGoti);
			$("#"+fillSpot).css("color","blue");
			playerTurn.push(fillSpot);
			chance++;
			game(playerTurn, id);
			drawMatch();
			if(gameOver===false){
			computer();
			};
		};
	});

	function computer(){

		id="Computer";
		var till = false;
		while(till===false && chance!==5){

			var move = (Math.random()*10).toFixed();
			var spotText = $("#"+move).text();
			if(spotText===""){
				$("#"+move).html(computerGoti);
				$("#"+move).css("color","red");
				computerTurn.push(move);
				till = true;
				game(computerTurn,id);
				drawMatch();
			}
		};

	};

	function game(turn,id){
		
		var count =0;
		for(var i=0;i<8;i++){
				
				for(var k=0;k<turn.length;k++){
				
					for(var j=0;j<3;j++){
						if(winChances[i][j]===parseInt(turn[k],10)){
							count++;
						}
					};
				};
				
				if(count===3){
					Win(id);	
				}else{
					count=0;
				}
			
		};

	};

	function reset(){
		$(".block").text("");
		playerTurn = [];
		computerTurn = [];
		$(".block").css("color","black");
		gameOver = true;
	};

	function drawMatch(){
		if($(".block").text().length===9){
				$("#result").html("Draw");
     		    $("#result").show();
     	 	    $("#main-div").hide();
	            $("#back").hide();
		    	reset();
		};
	};

	function Win(id){
		$("#result").html(id + "Wins");
    	$("#result").show();
    	$("#main-div").hide();
  		$("#back").hide();
		reset();	
	};



	
	
});