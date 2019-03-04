//MODULOS
 class Mascota{
    constructor(nombre,tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
}

module.exports={
    Mascota:Mascota
}

// export default Mascota --->> SOLO PARA CLASE NO CONSTANTES
//Otra forma
//export{Mascota}


// Otra forma
/*
 exports class Mascota{
    constructor(nombre,tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
}

*/