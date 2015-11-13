var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var compute = document.getElementById("compute");

function clickAdd(){
	var avalue = parseInt(a.value);
	var bvalue = parseInt(b.value);
	
	c.innerText = add(avalue, bvalue);
}

function add(avalue, bvalue){
	return avalue + bvalue;
}

compute.addEventListener('click',clickAdd);