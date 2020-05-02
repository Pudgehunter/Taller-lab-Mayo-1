class Circulo extends Figura{
    constructor(posX,posY,tamaño){
        super(posX,posY,tamaño);
    }

    dibujar() {
        fill(255);
        ellipse(this.posX,this.posY,this.tamaño,this.tamaño);
    }
}