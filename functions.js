
var element = document.getElementById("input");
element.addEventListener("input", function(){
	document.body.style.background = element.value;
});