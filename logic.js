let arrayCuadrados = [];
let arrayCirculos = [];
let numeros;
let pantalla;
let prueba;
let noCero;
let noDiez;
let duplicar;

function setup(){
    createCanvas(500,500);
    numeros = 0;
    pantalla = 0;
    noCero = false;
    noDiez = false;
    duplicar = false;
    for (let i = 0; i < numeros; i++){
        arrayCuadrados[i] = new Cuadrado(random(0,555),random(0,250),20);
    }
    for(let j = 0; j < numeros; j++){
        arrayCirculos[j] = new Circulo(random(0,555),random(360,555),20);
    }
}
function draw(){
    background(0);
    switch(pantalla){
        case 0: 
            fill(255);
            textSize(100);
            text(numeros, width/2, height/2);
            rect(180,300,80,60);
            rect(280,300,80,60);
            rect(180,400,180,60);
            fill(0);
            text("+",190,365)
            text("-",310,355)
            textSize(40);
            text("continuar",190,450)
            try {
                mostrarErrores(numeros); 
            } catch (error) {
                fill(355);
                rect(70, 100, 330, 40);
                fill(0);
                textSize(27);
                text(error.mensajes, 70+12, 100+30);
            }
        break;
        case 1:
            background(0);
            fill(255);
            rect(20,80,100,50);
            rect(20,180,100,50);
            rect(380,80,100,50);
            rect(380,180,100,50);
            fill(0);
            textSize(25);
            text("Agregar", 30, 110);
            text("Eliminar", 30, 210);
            text("Tamaño", 390, 110);
            text("Duplicar", 390, 210);
            for(let i=0; i < arrayCuadrados.length; i++){
                pintarCuadrados = arrayCuadrados[i];
                pintarCuadrados.dibujar();
                pintarCuadrados.mover(); 
            }
            for(let j=0; j < arrayCirculos.length; j++){
                pintarCirculos = arrayCirculos[j];
                pintarCirculos.dibujar();
                pintarCirculos.mover(); 
            }
            try {
                mostrarErrores(arrayCuadrados.length); 
            } catch (error) {
                fill(255);
                rect(240, 405, 245, 30);
                fill(0);
                textSize(20);
                text(error.mensajes, 240+12, 405+22);
                if(arrayCuadrados.length >= 10){
                    noCero = false; 
                }
                if(arrayCuadrados.length <= 0){
                    noDiez = false;
                }  
            }
        break;
    }
}
function mousePressed(){
switch(pantalla){
    case 0:
            if(mouseX > 180 && mouseX < 260 && mouseY > 300 && mouseY < 360 ){
                if(numeros <= 9){
                    numeros = numeros + 1;
                    arrayCuadrados.push(new Cuadrado(random(0,450),random(0,230),20))
                }
            }
            if(mouseX > 280 && mouseX < 280+80 && mouseY > 300 && mouseY < 300+60 ){
                if(numeros >= 1){
                    numeros = numeros - 1;
                    arrayCuadrados.pop();
                } 
            }
            if(mouseX > 180 && mouseX < 180+180 && mouseY > 400 && mouseY < 400+60){
                pantalla = 1;
            }
        break;
        case 1:
            if(mouseX > 20 && mouseX < 120 && mouseY > 80 && mouseY < 130){
                    if(noCero == true){
                    arrayCuadrados.push(new Cuadrado(random(0,400),random(0,240),20));
                    if(duplicar == true){
                        arrayCirculos.push(new Circulo(random(0,400),random(270,400),20));
                    }
                }
            }
            if(mouseX > 20 && mouseX < 120 && mouseY > 180 && mouseY < 230){
                if(noDiez == true){
                arrayCuadrados.pop();
                if(duplicar == true){
                    arrayCirculos.pop();
                }
                }
            }
            if(mouseX > 380 && mouseX < 480 && mouseY > 80 && mouseY < 130){
                arrayCuadrados.forEach(
                    function (cuadrado) {
                        cuadrado.tam();
                        console.log(cuadrado);
                    }
                );
                arrayCirculos.forEach(
                    function (circulos) {
                        circulos.tam();
                    }
                );
            }
            if(mouseX > 380 && mouseX < 480 && mouseY > 180 && mouseY < 230){
                if(duplicar == false){
                arrayCirculos = arrayCuadrados.map(elemento => {
                    return elemento = new Circulo(random(0,400),random(270,400),20);
                })
                duplicar = true;
            }
            }
            break;
}
}
function mostrarErrores(cantidadCuadrado){
    if(cantidadCuadrado >= 10){
        throw new Excepciones("No se puede mayor de 10");
    }else{
        noCero = true;
    }
    if(cantidadCuadrado <= 0){
        throw new Excepciones("No se puede menor de 0");
    }else{
        noDiez = true;
    }
}