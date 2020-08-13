var Bicicleta = require('../../models/bicicleta');

beforeEach( () => {
    Bicicleta.allBicis = [];
});

describe('Bicicleta.allBicis', () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});


describe('Bicicleta.add', () => {
    it('agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
        
        var a = new Bicicleta(1, 'rojo', 'montañera', [-17.782151, -63.175425]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Bicicleta.findById', () => {
    it('debe devolver la bici con id 1', () => {

        expect(Bicicleta.allBicis.length).toBe(0);
        
        var a = new Bicicleta(1, 'rojo', 'montañera', [-17.782151, -63.175425]);
        var b = new Bicicleta(2, 'verde', 'urbana', [-17.782181, -63.175435]);

        Bicicleta.add(a);
        Bicicleta.add(b);

        var targetBici = Bicicleta.findById(1);

        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(a.color);
        expect(targetBici.modelo).toBe(a.modelo);
    });
});