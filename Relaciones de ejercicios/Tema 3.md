# Ejercicios: Desplegando aplicaciones en la nube: Uso de PaaS


## Ejercicio 1

**Darse de alta en algún servicio PaaS tal como Heroku, zeit, BlueMix
u OpenShift.** 

Se ha realizado el alta en Heroku [aquí](https://signup.heroku.com/)


## Ejercicio 2

**Crear una aplicación en OpenShift o en algún otro PaaS en el que se
haya dado uno de alta. Realizar un despliegue de prueba usando alguno
de los ejemplos incluidos con el PaaS.**

Siguiendo los pasos de
la
[guía de Heroku para node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) se
ha lanzado [esta aplicación](https://first-deployment-k352k532.herokuapp.com/) a modo de prueba.

**Importante**, ya que esta no es una aplicación debidamente preparada
como  la del ejemplo se ha tenido que seguir las instrucciones de
preparación del
repositorio
[aquí](https://devcenter.heroku.com/articles/deploying-nodejs). Para
lo cual es necesario hacer algunas modificaciones.

Con el código disponible [aquí]()

## Ejercicio 3

**Realizar una app en express (o el lenguaje y marco elegido) que
incluya variables como en el caso anterior.** 

Se ha creado una aplicación simple, que simplemente utiliza 3
variables para ordenarlas y devolverlas cuando esto se solicita. 

```javascript
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
    res.send({
        'text':'utilice curl -X PUT http://127.0.0.1:8080/ordena/:primer/:segundo/:tercero, para ordenar esos números',
        'resultado':ordenamiento
    });
});


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});

```


## Ejercicio 4

**Crear pruebas para las diferentes rutas de la aplicación.**

Hemos realizado los siguientes tests para probar el funcionamiento de
las peticiones get y put:

```javascript
const assert = require('assert');
const request = require('supertest');
const app = require('../index.js');


describe('PUT /ordena', function() {
    it('should create', function (done) {
	request(app)
	    .put('/ordena/9/5/8')
	    .expect('Content-Type', /json/)
	    .expect(200,done);
    });
});


describe('GET /', function() {
    it('should return JSON'), function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);
    }
});
```


## Ejercicio 5

**Instalar y echar a andar tu primera aplicación en Heroku.**

Siguiendo los pasos de
la
[guía de Heroku para node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) se
ha lanzado [esta aplicación](https://pacific-hamlet-38054.herokuapp.com/) a modo de prueba.


## Ejercicio 6

**Usar como base la aplicación de ejemplo de heroku y combinarla con
la aplicación en node que se ha creado anteriormente. Probarla de
forma local con foreman. Al final de cada modificación, los tests
tendrán que funcionar correctamente; cuando se pasen los tests, se
puede volver a desplegar en heroku.** 

La aplicación del [ejercicio 1](## Ejercicio 1) cumple estas características
