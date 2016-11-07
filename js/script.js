function CalcBreakTime(){
		var hour = document.getElementById('hour').value;
		var min = document.getElementById('min').value;
		var timeGet = document.getElementById('timeGet');

		var a = moment().set({'hour': hour, 'minutes': min});
		a.add(30, 'minutes')
		timeGet.style.display = "block";
		timeGet.innerHTML = "Кыце выходить с брейка в: " + a.format('HH:mm');
	}