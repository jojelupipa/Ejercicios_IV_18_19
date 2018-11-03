var express = require('express');
var app = express();
var ordenamiento = ['a','b','c'];

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.put('/ordena/:primer/:segundo/:tercero', function( req, response ) {
    ordenamiento = [];
    ordenamiento.push(req.params.primer, req.params.segundo,
			 req.params.tercero);
    console.log(ordenamiento);
    ordenamiento.sort();
    console.log(ordenamiento);
    response.send(ordenamiento);
});

app.get('/', function(req,res) {
    res.status(200);
    res.send({
        'text':'utilice curl -X PUT http://127.0.0.1:8080/ordena/:primer/:segundo/:tercero, para ordenar esos números',
        'resultado':ordenamiento
    });
});


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

module.exports = app;
