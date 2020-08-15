var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta');
const request = require('postman-request');
const server = require('../../bin/www');

var base_url = "http://localhost:3000/api/bicicletas";

describe('Bicicleta API', () => {

    beforeEach( function(done){
        var mongoDB = 'mongodb://localhost:27017/testdb';
        mongoose.connect(mongoDB, { useNewUrlParser: true });

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function(){
            console.log('We are connected to test database!');
            done();
        });
    });

    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, success){
            if(err) console.log(err);
            mongoose.connection.close();
            done();
        });
    });


    describe('GET Bicicletas /', () => {
        it('Status 200', (done) => {
            request.get(base_url,(error, response, body) => {
                var result = JSON.parse(body);
                expect(response.statusCode).toBe(200);
                expect(result.bicicletas.length).toBe(0);
                done();
            });
        });
    });

    describe('POST Bicicletas /create', () => {
        it('Status 200', (done) => {
            var headers ={'content-type' : 'application/json'};
            var aBici = '{"id":10, "color":"rojo", "modelo":"urbana", "lat":-34, "":-54}';
            request.post({
                    headers:  headers,
                    url:      base_url + '/create',
                    body:     aBici
                }, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                var bici = JSON.parse(body).bicicleta;
                console.log(bici);
                expect(bici.color).toBe("rojo");
                expect(bici.ubicacion[0]).toBe(-34);
                expect(bici.ubicacion[1]).toBe(-54);
                done();
            });
        });
    });
});
