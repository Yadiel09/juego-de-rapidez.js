document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 20;
necesarios = 35;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*450);
   randNum2 =  Math.round(Math.random()*450);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 35) {
   	alert("GANASTE");
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("PERDISTE :(");
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);