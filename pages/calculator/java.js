function sum(){
	let inp1 = parseInt(document.querySelector("#inp1").value);
	let inp2 = parseInt(document.querySelector("#inp2").value);
	let result = document.querySelector("#result");
	final = inp1 + inp2;
	result.innerHTML = final;
}
function mult(){
	let inp1 = parseInt(document.querySelector("#inp1").value);
	let inp2 = parseInt(document.querySelector("#inp2").value);
	let result = document.querySelector("#result");
	final = inp1 * inp2;
	result.innerHTML = final;	
}
function div(){
	let inp1 = parseInt(document.querySelector("#inp1").value);
	let inp2 = parseInt(document.querySelector("#inp2").value);
	let result = document.querySelector("#result");
	final = inp1 / inp2;
	result.innerHTML = final;
}
function diff(){
	let inp1 = parseInt(document.querySelector("#inp1").value);
	let inp2 = parseInt(document.querySelector("#inp2").value);
	let result = document.querySelector("#result");
	final = inp1 - inp2;
	result.innerHTML = final;
}
function percent(){
	let inp1 = parseInt(document.querySelector("#inp1").value);
	let inp2 = parseInt(document.querySelector("#inp2").value);
	let result = document.querySelector("#result");
	final = inp2 / inp1 * 100;
	result.innerHTML = final;
}
function equal(){
	let inp1 = parseInt(document.querySelector("#inp1").value);
	let inp2 = parseInt(document.querySelector("#inp2").value);
	let result = document.querySelector("#result");
	final = inp1 + inp2;
	result.innerHTML = final;
}