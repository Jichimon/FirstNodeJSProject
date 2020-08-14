var Bicicleta = require('../../models/bicicleta');
const request = require('postman-request');
const server = require('../../bin/www');

describe('Bicicleta API', () => {
    describe('GET Bicicletas /', () => {
        it('Status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1, 'rojo', 'montañera', [-17.782151, -63.175425]);
            Bicicleta.add(a);

            request.get('http://localhost:3000/api/bicicletas',(error, response, body) => {
                //console.log(error);
                expect(response.statusCode).toBe(200);
            });
        });
    });

    describe('POST Bicicletas /create', () => {
        it('Status 200', (done) => {
            var headers ={'content-type' : 'application/json'};
            var aBici = '{"id":10, "color":"rojo", "modelo":"urbana", "lat":-34, "":-54}';

            request.post({
                    headers: headers,
                    url: 'http://localhost:3000/api/bicicletas/create',
                    body:aBici
                },(error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe("rojo");
                done();
            });
        });
    });
});
