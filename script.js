var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementById('background');
var genNew = document.getElementById('genNew'); 
var hd = document.querySelector("h3");

function changecolors() {
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
 	hd.textContent = body.style.background+ ";";
 };


color1.addEventListener("input", changecolors);
color2.addEventListener("input", changecolors);

genNew.addEventListener("click", function () {
	var randomnumber1= Math.floor(Math.random()*16777215).toString(16);
	var randomnumber2= Math.floor(Math.random()*16777215).toString(16);
	color1.value="#"+randomnumber1;
	color2.value="#"+randomnumber2;
	changecolors();
});
	changecolors();

