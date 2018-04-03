var valor_de_display = document.getElementById("display")
function animar(elemento){
	elemento.style.transform="scale(0.9)";
	setTimeout(function () {
		elemento.style.transform="scale(1)";
	}, 100);
}
function display(elemento){
	if(valor_de_display.textContent==0 && valor_de_display.textContent.indexOf(".")==-1){
		valor_de_display.textContent = elemento.id
	}else{
		valor_de_display.textContent = valor_de_display.textContent + elemento.id
		verificarDisplay(valor_de_display.textContent)
	}
}
function verificarDisplay(elemento){
	if(elemento.length>8){
		valor_de_display.textContent = elemento.substring(0, 8)
	}
}
function funciones(elemento){
	switch(elemento.id){
		case "on":
			Calculadora.on()
			break;
		case "punto":
			Calculadora.punto()
			break;
		case "sign":
			Calculadora.signo()
			break;
		case "mas":
			Calculadora.sumar()
			break;
		case "menos":
			Calculadora.restar()
			break;
		case "por":
			Calculadora.multiplicar()
			break;
		case "dividido":
			Calculadora.dividir()
			break;
		case "igual":
			Calculadora.resolver()
			break;
	}
}

var Calculadora = {
	init: function(){
		this.asignarTeclasNumericas("tecla")
		this.asignarTeclasFunciones("tecla")
	},
	valor_a: 0,
	valor_b: 0,
	operacion: "",
	resultado: 0,
	asignarTeclasNumericas: function(selector){
		var teclas_de_numeros = document.getElementsByClassName(selector)
		for(i = 0; i < teclas_de_numeros.length; i++){
			if(!isNaN(teclas_de_numeros[i].id))
			teclas_de_numeros[i].onclick = this.eventoClickTeclaNumerica
		}
	},
	asignarTeclasFunciones(selector){
		var teclas_de_funcion = document.getElementsByClassName(selector)
		for(i in teclas_de_funcion){
			if(isNaN(teclas_de_funcion[i].id)){
				teclas_de_funcion[i].onclick = this.eventoClickTeclaFuncion
			}
		}
	},
	eventoClickTeclaFuncion: function(event){
		animar(event.target)
		funciones(event.target)
	},
	eventoClickTeclaNumerica: function(event){
		animar(event.target)
		display(event.target)
	},
	on: function(){
		valor_de_display.textContent = 0
	},
	punto: function(){
		if(valor_de_display.textContent.indexOf(".")==-1){
			valor_de_display.textContent = valor_de_display.textContent + "."
		}
	},
	signo: function(){
		valor_de_display.textContent *= -1
	},

	sumar: function(){
		valor_a = valor_de_display.textContent
		operacion = "+"
		valor_de_display.textContent = ""
	},
	restar: function(){
		valor_a = valor_de_display.textContent
		operacion = "-"
		valor_de_display.textContent = ""
	},
	multiplicar: function(){
		valor_a = valor_de_display.textContent
		operacion = "*"
		valor_de_display.textContent = ""
	},
	dividir: function(){
		valor_a = valor_de_display.textContent
		operacion = "/"
		valor_de_display.textContent = ""
	},
	resolver: function(){
		valor_b = valor_de_display.textContent
		switch(operacion){
			case "+":
				resultado = parseFloat(valor_a) + parseFloat(valor_b)
				break;
			case "-":
				resultado = parseFloat(valor_a) - parseFloat(valor_b)
				break;
			case "*":
				resultado = parseFloat(valor_a) * parseFloat(valor_b)
				break;
			case "/":
				resultado = parseFloat(valor_a) / parseFloat(valor_b)
				break;
		}
		valor_de_display.textContent = resultado
		verificarDisplay(valor_de_display.textContent)
	}
}
Calculadora.init();