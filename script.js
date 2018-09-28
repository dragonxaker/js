var btn1     = document.getElementById("btn1"),
		btn2     = document.getElementById("btn2"),
		list     = document.getElementById("list"),
		items    = list.getElementsByClassName("item"),
		popup    = document.querySelector(".popup"),
		close    = document.querySelector(".close");

var age      = -1,
		name     = "",
		admitted = false;

window.onload = start;

function main() {
	btn1.addEventListener("click", addItem);
	btn2.addEventListener("click", delItem);
	close.addEventListener("click", closePopup);

	return 0;
}

function start() {
	var agreed = confirm("Для доступа к сайту вам необходимо быть старше 18 лет");

	if (agreed) {
		poll()
		allowAccess(admitted);
	};
}

function poll() {
	while (name == "" || (!isNumeric(age) && age < 0 )) {
		name = prompt("Как Вас зовут?", "");
		age  = prompt("Сколько Вам полных лет сейчас?", "");
	};

	if (age > 17) { admitted = true };
}

function allowAccess(admitted) {
	if (admitted) {

		console.log("Пользователь: " + name + " получил доступ к сайту");
		alert(name + ", Добро пожаловать.");

		main();
	} else {
		var word = "",
				diff = 18 - age;
alert("Сожалеем, но доступ запрещен");
	};
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function addItem() {
	var newLi = document.createElement("li");

	newLi.innerHTML = "Новая задача";
	newLi.className = "item";
	list.appendChild(newLi);
	console.log(list);

	closePopup();
}

function delItem() {
	if (items.length != 0) { list.removeChild(items[0]) };
	if (items.length == 0) { popup.style.display = "block" };
}

function closePopup() {
	popup.style.display = "none";	
}
