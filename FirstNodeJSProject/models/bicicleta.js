//constructor
var Bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = () =>{
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = (aBici) =>{
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = (aBiciId) => {
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if(aBici) 
        return aBici;
    else
        throw new Error (`No existe una bicicleta con el id : ${aBiciId}`);

}

Bicicleta.removeById = (aBiciId) => {
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1); //eliminamos 1 elemento a partir de la pos i
            break;
        }
        
    }
}

/*
//probando el modelo añadiendo dos bicis
var a = new Bicicleta(1, 'rojo', 'montañera', [-17.782151, -63.175425]);
var b = new Bicicleta(2, 'azul', 'urbana', [-17.785134, -63.194737]);

Bicicleta.add(a);
Bicicleta.add(b);
*/
//exportar el modulo para que se pueda usar el "modelo"
module.exports = Bicicleta;