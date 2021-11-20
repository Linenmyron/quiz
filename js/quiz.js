var question_nr = 1;
var gamescore = 0;

thequestion();

function thequestion(){
	if(question_nr == 1){
		document.getElementById("question").innerHTML = "Finlands president?";
		document.getElementById("answer1").innerHTML = "Din mamma";
		document.getElementById("answer2").innerHTML = "Sauli Niinistö";
		document.getElementById("answer3").innerHTML = "Jag själv";
	}
	else if(question_nr == 2){
		document.getElementById("question").innerHTML = "Finlands huvudstad?";
		document.getElementById("answer1").innerHTML = "Åbo";
		document.getElementById("answer2").innerHTML = "Karis";
		document.getElementById("answer3").innerHTML = "Helsingfors";
	}
	else if(question_nr == 3){
		document.getElementById("question").innerHTML = "Finlands sydligaste stad?";
		document.getElementById("answer1").innerHTML = "Hangö";
		document.getElementById("answer2").innerHTML = "Rovaniemi";
		document.getElementById("answer3").innerHTML = "Pyhäntä";
	}
	else if(question_nr == 4){
		document.getElementById("question").innerHTML = "Finlands högsta berg?";
		document.getElementById("answer1").innerHTML = "Helags";
		document.getElementById("answer2").innerHTML = "Halde Fjäll";
		document.getElementById("answer3").innerHTML = "Ahkka";
	}
	else if(question_nr == 5){
		document.getElementById("question").innerHTML = "När införde euro i Finland?";
		document.getElementById("answer1").innerHTML = "2001";
		document.getElementById("answer2").innerHTML = "2004";
		document.getElementById("answer3").innerHTML = "2002";
	}
	else if(question_nr == 6){
		document.getElementById("question").innerHTML = "Vilket år var Juho Kusti Paasikivi president?";
		document.getElementById("answer1").innerHTML = "1946";
		document.getElementById("answer2").innerHTML = "1944";
		document.getElementById("answer3").innerHTML = "1936";
	}
	else if(question_nr == 7){
		document.getElementById("question").innerHTML = "Vad är betyder förkortning SF?";
		document.getElementById("answer1").innerHTML = "Soviet-Finland ";
		document.getElementById("answer2").innerHTML = "Suomi-Federation";
		document.getElementById("answer3").innerHTML = "Suomi-Finland";
	}
	else if(question_nr == 8){
		document.getElementById("question").innerHTML = "Vilket år var Finlands inbördeskrig?";
		document.getElementById("answer1").innerHTML = "1918";
		document.getElementById("answer2").innerHTML = "1890";
		document.getElementById("answer3").innerHTML = "1929";
	}
	else if(question_nr == 9){
		document.getElementById("question").innerHTML = "Finlands störsa sjö?";
		document.getElementById("answer1").innerHTML = "Pumpviken";
		document.getElementById("answer2").innerHTML = "Saimen";
		document.getElementById("answer3").innerHTML = "Pojoviken";
	}
	else if(question_nr == 10){
		document.getElementById("question").innerHTML = "När blev Finland självständig?";
		document.getElementById("answer1").innerHTML = "3 januari 1918";
		document.getElementById("answer2").innerHTML = "6 december 1917";
		document.getElementById("answer3").innerHTML = "24 april 1910";
	}
	else if(question_nr == 11){
		document.getElementById("gamebox").style.display = "none";
		document.getElementById("scorebox").style.display = "block";
		document.getElementById("finalscore").innerHTML = gamescore;
		if(gamescore <= 10){
			document.getElementById("message").innerHTML = "Go back to the school!";
			document.getElementById("endgamefail").src = "audio/endgamefail.mp3";
			document.getElementById("endgamefail").play();
		}
		else if(gamescore >= 15 && gamescore <= 100){
			document.getElementById("message").innerHTML = "Try harder";
			document.getElementById("endgamefail").src = "audio/endgamefail.mp3";
			document.getElementById("endgamefail").play();
		}

		else if(gamescore >= 110 && gamescore <= 200){
			document.getElementById("message").innerHTML = "Good good";
			document.getElementById("endgamesuccess").src = "audio/endgamesuccess.mp3";
			document.getElementById("endgamesuccess").play();
		}

		else if(gamescore == 220){
			document.getElementById("message").innerHTML = "Congratulations!";
			document.getElementById("endgamesuccess").src = "audio/endgamesuccess.mp3";
			document.getElementById("endgamesuccess").play();
		}
	}

}
//funktionen som startar om frågesporten
function restart(){
	gamescore = 0; //nollställer poäng
	question_nr = 1; //nollställer frågorna
	document.getElementById("gamebox").style.display = "block";
	document.getElementById("scorebox").style.display = "none";
	document.getElementById("score").innerHTML = "Score" + gamescore;
	thequestion(); //visar frågorna och svaralternativ

}


function answer(answer_nr){
	
	if(question_nr == 1 && answer_nr == 2 || 
		question_nr == 2 && answer_nr == 3 ||
		question_nr == 3 && answer_nr == 1 ||
		question_nr == 4 && answer_nr == 2 ||
		question_nr == 5 && answer_nr == 3 ||
		question_nr == 6 && answer_nr == 1 ||
		question_nr == 7 && answer_nr == 3 ||
		question_nr == 8 && answer_nr == 1 ||
		question_nr == 9 && answer_nr == 2 ||
		question_nr == 10 && answer_nr == 1 ){
		if(question_nr == 2){
			gamescore += 30;
		}
		else {
			gamescore+= 10;
		}

		gamescore += 10;
		document.getElementById("score").innerHTML = "Score: " + gamescore;
		document.getElementById("right").src = "audio/success.mp3";
		document.getElementById("right").play();
	}

	else if(question_nr == 1 && answer_nr == 1 || 
			question_nr == 1 && answer_nr == 3 || 
			question_nr == 2 && answer_nr == 1 || 
			question_nr == 2 && answer_nr == 2 ||
			question_nr == 3 && answer_nr == 2 ||
			question_nr == 3 && answer_nr == 3 ||
			question_nr == 4 && answer_nr == 1 ||
			question_nr == 4 && answer_nr == 3 ||
			question_nr == 5 && answer_nr == 1 ||
			question_nr == 5 && answer_nr == 2 ||
			question_nr == 6 && answer_nr == 2 ||
			question_nr == 6 && answer_nr == 3 ||
			question_nr == 7 && answer_nr == 1 ||
			question_nr == 7 && answer_nr == 2 ||
			question_nr == 8 && answer_nr == 2 ||
			question_nr == 8 && answer_nr == 3 ||
			question_nr == 9 && answer_nr == 1 ||
			question_nr == 9 && answer_nr == 3 ||
			question_nr == 10 && answer_nr == 2 || 
			question_nr == 10 && answer_nr == 2){

		gamescore -= 5;
		document.getElementById("score").innerHTML = "Score: " + gamescore;
		document.getElementById("right").src = "audio/failure.mp3";
		document.getElementById("wrong").play();
	}
	question_nr++;
	thequestion();
}
