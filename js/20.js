//metodos de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando cancion: ${id}`)
}


reproductor.reproducir(3850);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Clasica');
reproductor.reproducirPlaylist('Clasica');