class Cuadrado extends Figura{
    constructor(posX,posY,tamaño){
        super(posX,posY,tamaño);
    }

    dibujar() {
        fill(255);
        rect(this.posX,this.posY,this.tamaño,this.tamaño);
    }
}

