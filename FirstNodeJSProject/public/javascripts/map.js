var map = L.map('main_map').setView([-17.7850527,-63.1811111], 13);

//usando openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'

}).addTo(map);


$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach((bici) =>{
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
})
