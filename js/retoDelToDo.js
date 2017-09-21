//Variables para los botones que estan en el HTML
var all = document.querySelector(".all");
var completados = document.querySelector(".completados");
var faltantes = document.querySelector(".faltantes");
var select =  document.querySelector(".select");
var eliminar = document.querySelector(".eliminar");
var hideAll = document.querySelector(".hideAll");
var boton = document.querySelectorAll(".buttons");
var restantes = document.querySelector(".restantes");
var down = document.querySelector(".select");


//Variables de arranque para la funcion LineEvent
var line = document.querySelectorAll(".remove");
var contLine = line.length;



/////////////////////////////////////////////////////////////////////////////////////////////
//Funcion que se ejecuara cada que se presione la tecla "ENTER" en el input[type="text"]	/
/////////////////////////////////////////////////////////////////////////////////////////////
function createLi(){
	var nuevo = document.querySelector(".new").value;
	if(!!nuevo){//Checa que la cadena no este vacia
		console.log(nuevo);
		var li = document.createElement("LI");
		var span = document.createElement("SPAN");
		var input = document.createElement("INPUT");
		var textnode = document.createTextNode(nuevo);
		//addentro de li se le agregara un span
		li.appendChild(span);
		//addentro de span se le agregara un input
		span.appendChild(input);
		//addentro de li se le agregara un el valor del input="text"
		li.appendChild(textnode);
		document.querySelector(".todosNew").appendChild(li);
		input.setAttribute("type", "checkbox");
		input.setAttribute("class", "remove");
		span.setAttribute("class", "span");
		li.setAttribute("class", "toBeRemove");
		contLine++;
	}
	document.querySelector(".new").value = "";
}
/////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//Correr estas funcion siempre							/
/////////////////////////////////////////////////////////
setInterval(todoOnada, 0);
setInterval(hayNoHay, 0);
setInterval(botones, 0);
setInterval(lineEvent, 0);
///////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//Para poner la linea señal que ya esta hecha la tarea			//
//////////////////////////////////////////////////////////////////
function lineEvent(){
	var line = document.querySelectorAll(".remove");
	var li = document.querySelectorAll(".toBeRemove");
	for(var i = 0; i < contLine; i++){
		if(line[i].checked){
			li[i].classList.add("cross");
		} else {
			li[i].classList.remove("cross");
		}
	}
}
//////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
//Funcion para eliminar todos los checkbox seleccionados		/
/////////////////////////////////////////////////////////////////
eliminar.addEventListener("click", function(){
	active();
	var remove = document.querySelectorAll(".remove");
	var li = document.querySelectorAll(".toBeRemove");
	for(var i = 0; i < remove.length; i++){
			if(remove[i].checked){
			li[i].parentNode.removeChild(li[i]);
			contLine--;
		}
	}
	showAll();
});
///////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////
//Funcion para mostrar todos los checkbox, seleccionados o no	/
/////////////////////////////////////////////////////////////////
function showAll(){
	var remove = document.querySelectorAll(".remove");
	var li = document.querySelectorAll(".toBeRemove");
	 for(var i = 0; i < remove.length; i++){
	   if(remove[i].checked || !remove[i].checked){
	     li[i].classList.remove("hiden");
	   }
	 }
}
 //Esta es la misma de arriba solo que esta es cuando le damos click
all.addEventListener("click", function(){
var remove = document.querySelectorAll(".remove");
var li = document.querySelectorAll(".toBeRemove");
  for(var i = 0; i < remove.length; i++){
    if(remove[i].checked || !remove[i].checked){
      li[i].classList.remove("hiden");
    }
  }
});
/////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////
//Funcion para mostrar solamente los checkbox seleccionados		/
/////////////////////////////////////////////////////////////////
completados.addEventListener("click", function(){
  var remove = document.querySelectorAll(".remove");
  var li = document.querySelectorAll(".toBeRemove");
  for(var i = 0; i < remove.length; i++){
    if(!remove[i].checked){
      li[i].classList.add("hiden");
    } else {
      li[i].classList.remove("hiden");
    }
  }
});
/////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////
//Funcion para mostrar solamente los checkbox no seleccionados	/
/////////////////////////////////////////////////////////////////
faltantes.addEventListener("click", function(){
  var remove = document.querySelectorAll(".remove");
  var li = document.querySelectorAll(".toBeRemove");
  for(var i = 0; i < remove.length; i++){
    if(!remove[i].checked){
      li[i].classList.remove("hiden");
    } else {
      li[i].classList.add("hiden");
    }
  }
});
/////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////
//Boton para seleccionar o deseleccionar los checkboz	/
/////////////////////////////////////////////////////////
select.addEventListener("click", function(){
  var checked = document.querySelectorAll('.remove:checked');
  var line = document.querySelectorAll(".remove");
  if (checked.length == line.length) {
      //alert("Todo full");
    for(var i = 0; i < line.length; i++){
    	line[i].checked = false;
    }
  } else if (checked.length === 0){
  	for(var i = 0; i < line.length; i++){
    	line[i].checked = true;
    }
  }else {
      //alert("casi full");
    for(var i = 0; i < line.length; i++){
    	line[i].checked = true;
    }
  }
});
/////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////
//Funcion para saber si estan vacios todos los check box o no 	/
//y si estan vacios entoncesesconder el boton "eliminar" y si 	/
//uno o mas no estab vacios entonces mostrar el boton 			/
/////////////////////////////////////////////////////////////////
function todoOnada(){
  var restantes = document.querySelector(".restantes");
  var checked = document.querySelectorAll('.remove:checked');
  var line = document.querySelectorAll(".remove");
  if (checked.length == line.length) {
      //alert("Todo full");
    eliminar.classList.remove("hiden");
    down.classList.add("allSelected");
  } else if (checked.length === 0){
      //alert("Todo empty");
    eliminar.classList.add("hiden"); 
    down.classList.remove("allSelected"); 
  }else {
      //alert("casi full");
    eliminar.classList.remove("hiden");
    down.classList.remove("allSelected");
  }
  line.textContent = " ";
}
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
//Funcion para saber si hay o no hay to-dos pendientes			/
/////////////////////////////////////////////////////////////////
function hayNoHay(){
	var line = document.querySelectorAll(".remove");
	var checked = document.querySelectorAll('.remove:checked');
	var li = document.querySelectorAll(".toBeRemove"); 
	if(li.length <= 0){
		hideAll.classList.add("hiden");
		active();
	} else {
		hideAll.classList.remove("hiden");
	}

	restantes.innerHTML = (line.length - checked.length) + " items left";
}



function botones(){
	for(var i = 0; i < boton.length; i++){
		boton[i].addEventListener("click", function(){
			boton[0].classList.remove("active");
			boton[1].classList.remove("active");
			boton[2].classList.remove("active");
			this.classList.add("active");
		})
	}
}
	

function active(){
	boton[0].classList.remove("active");
	boton[1].classList.remove("active");
	boton[2].classList.remove("active");
	all.classList.add("active");
}


