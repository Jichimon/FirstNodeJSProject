var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = (req, res) => {
    Bicicleta.find({}, function(err, bicis){
        res.status(200).json({
            bicicletas: bicis
        });
    });
}

exports.bicicleta_create = (req, res) => {
    var bici = new Bicicleta({code: req.body.id, color: req.body.color, modelo: req.body.modelo, ubicacion: [req.body.lat, req.body.lng]});
    bici.save( (err) => {
        res.status(200).json(bici);
    });

}

exports.bicicleta_delete = (req, res) => {
    Bicicleta.removeById(req.body.id);

    res.status(204).send();
}