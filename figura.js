class Figura{
    constructor(posX,posY,tamaño){
        this.posX = posX;
        this.posY = posY;
        this.velocidad = 3;
        this.direccion = 1;
        this.tamaño = tamaño;
    }

    pintar(){}

    mover(){
        this.posX = this.posX + this.velocidad*this.direccion;
        
        if(this.posX > 480 || this.posX < 0) {
            this.direccion = this.direccion * -1;
        }
    }

    tam(){
        if(this.tamaño < 50)
        this.tamaño *= 2;
    }
}