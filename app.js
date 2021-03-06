// Side note - learn how to also use const and let instead of var
var timer = document.getElementById("timer");
var alarmhours = document.getElementById("alarmhours");
var alarmmins = document.getElementById("alarmmins");
var alarmsecs = document.getElementById("alarmsecs");
var ampm = document.getElementById("ampm");
var startstop = document.getElementById("startstop");

var currentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio("clap.wav");
sound.loop = true;

function showTime() {
	var now = new Date();
	currentTime = now.toLocaleTimeString();

	if (currentTime === alarmElement) {
		sound.play();
	}

	timer.textContent = currentTime;
	setTimeout(showTime, 1000);
}

showTime();

/* I removed the select variable you 
created in all these functions,
there is no need 
*/
function addSec(id) {
	var sec = 59;

	for (i = 0; i <= sec; i++) {
		id.appendChild(new Option(i < 10 ? "0" + i : i));
	}
}

/* 
i added this function,
it wasnt part of the screenshot you sent
*/
function addMins(id) {
	const min = 59;

	for (i = 0; i <= min; i++) {

		id.appendChild(new Option(i));
	}
}

function addHour(id) {
	var hour = 12;

	for (i = 0; i <= hour; i++) {

		id.appendChild(new Option(i));
	}
}

addHour(alarmhours);
addSec(alarmsecs);
addMins(alarmmins);

start.onclick = function() {
	if (activeAlarm === false) {
		alarmhours.disabled = true;
		alarmmins.disabled = true;
		alarmsecs.disabled = true;
		ampm.disabled = true;

		alarmElement = alarmhours.value + ":" + alarmmins.value + ":" + alarmsecs.value + " " + ampm.value;

		this.textContent = "Clear Alarm";
		activeAlarm = true;
	} else {
		alarmhours.disabled = false;
		alarmmins.disabled = false;
		alarmsecs.disabled = false;
		ampm.disabled = false;

		this.textContent = "Set Alarm";
		sound.pause();
		activeAlarm = false;
	}
}
