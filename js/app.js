var flag = false
function animar(elemento){
	elemento.style.transform="scale(0.9)";
	setTimeout(function () {
		elemento.style.transform="scale(1)";
	}, 100);
}
function display(elemento){
	var valor_de_display = document.getElementById("display")
	if(!isNaN(elemento.id)){
		if(valor_de_display.textContent==0 && !flag){
			valor_de_display.textContent = elemento.id
		}else if(valor_de_display.textContent.length<8){
			valor_de_display.textContent = valor_de_display.textContent + elemento.id
		}
	}
}
function borrarDisplay(){
	document.getElementById("display").textContent = 0
	flag = false
}
function punto(){
	if(!flag){
		var valor_de_display = document.getElementById("display")
		valor_de_display.textContent = valor_de_display.textContent + "."
		flag = true
	}
}
function funcionMasMenos(){
	document.getElementById("display").textContent *= -1
}

var Calculadora = {
	init: function(){
		this.asignarTeclas("tecla")
		this.asignarFuncionON()
		this.asignarTeclaPunto()
		this.asignarMasMenos()
	},
	valor_a: 0,
	valor_b: 0,
	resultado: 0,
	asignarTeclas: function(selector){
		var teclas = document.getElementsByClassName(selector)
		for(i = 0; i < teclas.length; i++){
			teclas[i].onclick = this.eventoPresionarTecla
		}
	},
	eventoPresionarTecla: function(event){
		animar(event.target)
		display(event.target)
	},
	asignarFuncionON: function(){
		document.getElementById("on").onclick = this.eventoBorrarDisplay
	},
	eventoBorrarDisplay: function(event){
		animar(event.target)
		borrarDisplay()
	},
	asignarTeclaPunto: function(){
		document.getElementById("punto").onclick = this.eventoTeclaPunto
	},
	eventoTeclaPunto: function(event){
		animar(event.target)
		punto()
	},
	asignarMasMenos: function (){
		document.getElementById("sign").onclick = this.eventoTeclaMasMenos
	},
	eventoTeclaMasMenos: function(event){
		animar(event.target)
		funcionMasMenos()
	},
	sumar: function(){

	},
	restar: function(){

	},
	multiplicar: function(){

	},
	dividir: function(){

	}
}
Calculadora.init();