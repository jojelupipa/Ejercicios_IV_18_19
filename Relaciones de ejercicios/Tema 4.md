# Ejercicios: Contenedores


## Ejercicio 1

**Instala LXC en tu versión de Linux favorita. Normalmente la versión
en desarrollo, disponible tanto en GitHub como en el sitio web está
bastante más avanzada; para evitar problemas sobre todo con las
herramientas que vamos a ver más adelante, conviene que te instales la
última versión y si es posible una igual o mayor a la 1.0.**

En Ubuntu existen los PPA oficiales para instalar LXC. Simplemente los
añadimos e instalamos así:

```
sudo add-apt-repository ppa:ubuntu-lxc/lxc-lts
sudo apt-get update
sudo apt install lxc
```

Si queremos poder crear contenedores sin privilegios tendremos que
seguir los pasos que se
indican
[aquí](https://linuxcontainers.org/lxc/getting-started/#creating-unprivileged-containers-as-a-user) 

Un contenedor de este tipo por lo general no nos permitirá:

* El montaje de la mayor parte de los sistemas de archivos

* Crear nodos de dispositivo

* Cualquier operación que esté en un uid/gid que esté fuera del mapped
  set.
  

## Ejercicio 2

**Crear y ejecutar un contenedor basado en tu distribución y otro
basado en otra distribución, tal como Fedora. Nota En general, crear
un contenedor basado en tu distribución y otro basado en otra que no
sea la tuya.** 

Simpemente con la orden  `sudo lxc-create -t download -n nombre`
podemos crear un contenedor para la distribución (release y
arquitectura) que elijamos.

Para el contenedor basado en mi distribución instalamos ubuntu trusty
i386, y para la alternativa escogemos archlinux current amd64.

Una vez los hayamos creado podemos inicializarlos con `sudo lxc-start
-n nombre` y conectarnos a ellos por terminal con `sudo lxc-attach -n
nombre` (Y hacer el logout de ellas con `exit`).




## Ejercicio 3

**Instalar docker.**

Esto es algo que ya habíamos hecho para probar los tests localmente
antes de enviar los hitos del proyecto, en aquel momento
seguí
[estas instrucciones](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04) para
instalarlo y poder ejecutarlo como usuario.


## Ejercicio 4

1. **Instalar a partir de docker una imagen alternativa de Ubuntu y
   alguna adicional, por ejemplo de CentOS.** 

Para hacer la prueba vamos a instalar un contenedor de ubuntu con sshd
preconfigurado:

```sudo docker pull rastasheep/ubuntu-sshd```

Y alguna otra como fedora:

```sudo docker pull fedora```


2.  **Buscar e instalar una imagen que incluya MongoDB.**

Buscando hemos encontrado este contenedor de Alpine Linux que tiene
mongodb:

```sudo docker pull mvertes/alpine-mongo```

Para comprobar que todas estas imágenes estén debidamente descargadas
utilizamos `sudo docker images`, que nos proporcionará una salida como
esta.

```
REPOSITORY                  TAG                 IMAGE ID            CREATED             SIZE
fedora                      latest              8c568f104326        10 days ago         267MB
mvertes/alpine-mongo        latest              8e226529ccce        5 weeks ago         122MB
rastasheep/ubuntu-sshd      latest              49533628fb37        6 months ago        234MB
```



## Ejercicio 5

**Crear un usuario propio e instalar alguna aplicación tal como nginx
en el contenedor creado de esta forma, usando las órdenes propias del
sistema operativo con el que se haya inicializado el contenedor.** 

*Trabajaremos en el contenedor de ubuntu-sshd del ejercicio anterior*

Para crear nuestro usuario tenemos `useradd`, y para instalar alguna
aplicación, como nginx, vamos a tener que actualizar los paquetes
disponibles pues es una versión tan minimizada que no incluye los
necesarios para instalar aplicaciones como nginx.

```apt update && apt upgrade```

Y una vez estén actualizados ya podremos instalar nginx o cualquier
otra con `apt install nginx`.


## Ejercicio 6

**Crear a partir del contenedor anterior una imagen persistente con
commit.**

Miramos la ID del contenedor que nos interesa en `docker ps
-a`. Entonces utilizamos `docker commit <ID_contenedor>` que guardará
el estado del contenedor para su posterior uso.



## Ejercicio 7

**Crear un Dockerfile para el servicio web que se ha venido
desarrollando en el proyecto de la asignatura.** 

Como se puede ver
en [Duckpiler](https://github.com/jojelupipa/Duckpiler) se ha creado
un archivo Dockerfile para este servicio.

```
# Choose image to build from
FROM node:8

# Choose and create workdir for our app
WORKDIR /usr/src/app

# Install all dependencies
COPY package*.json ./

RUN npm install

# Bundle our app source code
COPY . .

# Bind app to specific port
EXPOSE 8080

# Define command to run the app
CMD [ "npm", "start" ]

```

*Del mismo modo se ha creado un .dockerignore para evitar que al crear
el contenedor se añadan archivos no necesarios*


## Ejercicio 8

**Desplegar un contenedor en alguno de estos servicios, de prueba
gratuita o gratuitos.**

Se ha creado un contenedor correspondiente al servicio que se está
realizando para la asignatura [aquí](https://hub.docker.com/r/jojelupipa/duckpiler/).

Y se ha desplegado [aquí](https://duckpiler-hinlulcolf.now.sh/).
