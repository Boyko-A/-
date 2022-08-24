/*вводим переменные*/
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var emptyArr = [];

while (isSunk == false) {
	guess = prompt ("Абордажные клинки оголить! (введи цифру 0-6):");
	if (guess < 0 || guess > 6) { /*проверка значения в диапазоне*/
		alert("Разрази меня гром! (цифры только от 0 до 6)");
	} else {
		guesses = guesses + 1;
			
		if (emptyArr.includes(guess)) {
			alert('Эй, на палубе! Ты сюда уже стрелял!');
			guesses = guesses + 1;
		} else {
			if (guess == location1 || guess == location2 || guess == location3) {
				alert("Ранил");
				emptyArr.push(guess);
				hits = hits + 1;
				if (hits == 3) {
					isSunk = true;
					alert("Победа! Корабль отправился кормить рыб.");
				}
			} else {
				alert("Промазал");
			}
		}
	}
}
var status = "У вас было " + guesses + " попыток потопить противников, " + "точность попаданий составляет " + (3/guesses);
alert(status);
		

	
