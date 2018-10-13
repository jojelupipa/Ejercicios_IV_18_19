# Ejercicios: Desarrollo Basado en Pruebas

## Ejercicio 1.

**Descargar y ejecutar las pruebas de alguno de los proyectos
anteriores, y si sale todo bien, hacer un pull request a alguno de
esos proyectos con tests adicionales, si es que faltan (en el momento
que se lea este tema).**

Se ha probado en el proyecto en python. La aportación a los tests se
puede apreciar [aquí](https://github.com/JJ/tdd-gdg/pull/13).

## Ejercicio 2.


**Para la aplicación que se está haciendo, escribir una serie de
aserciones y probar que efectivamente no fallan. Añadir tests para una
nueva funcionalidad, probar que falla y escribir el código para que no
lo haga (vamos, lo que viene siendo TDD).** 

[Aquí](https://github.com/jojelupipa/Duckpiler/blob/master/test/tests.js) se
encuentran los tests unitarios que se han realizado.

## Ejercicio 3.

**Crear algún conjunto de scripts de tests, usando tu lenguaje favorito, y ejecutarlos desde el marco de test más adecuado (o el que más te guste) para ese lenguaje.**

En el mismo repositorio que el ejercicio anterior se ha usado Mocha
para probar esos tests con el
correspondiente
[código](https://github.com/jojelupipa/Duckpiler/blob/master/src/duckpiler.js).

La salida es la al ejecutar los tests es la siguiente:

```
prompt>$ npm test

> @ test /home/cuack/Escritorio/Proyecto_IV
> mocha



  Duckpiler
    Carga
      ✓ should be loaded
    validateExtension()
      ✓ should return true if it is a valid extension
      ✓ should return false if it is no a valid extension
    generateOutputFileName()
      ✓ should return the same file name but with .pdf extension
      ✓ should return 'err' if the file has a wrong name


  5 passing (7ms)
```
