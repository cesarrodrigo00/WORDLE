let lista = ["ARBOL", "ANGEL", "MARCO", "AVION", "TALAR"]
let palabra = ""  //lista[Math.floor(Math.random()*lista.length)];
//alert(palabra);
let intentos = 6;
const API = https = "https://random-word-api.herokuapp.com/word?length=5&lang=es"
fetch(API)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        palabra = response[0].toUpperCase()
        console.log(palabra)
    })
    .catch(err => palabra = lista[Math.floor(Math.random()*lista)]);
const BOTON = document.getElementById("guess-button");
BOTON.addEventListener("click", intentar)
function intentar(){
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row" ;
    const INTENTO = leerIntento();
    if (INTENTO == palabra){
        terminar("<h1>Ganaste!</h1>")
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement("span");
        SPAN.className = "letter" ;
        if (palabra [i]==INTENTO[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "green";
        }
        else if (palabra.includes(INTENTO[i])){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "yellow";
        }
        else{
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "grey";
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
        if (intentos==0){
            terminar("<h1>Perdiste!</h1>")
        }
}
function leerIntento(){
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase()
   return intento
}
function terminar(mensaje){
    BOTON.disabled = true ;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}