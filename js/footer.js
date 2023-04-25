$(document).ready(function() {
  // Desplazamiento suave al hacer clic en un enlace con la clase "scroll"
  $(".scroll").on('click', function(event) {

    // Asegúrate de que esta opción por defecto del navegador esté deshabilitada
    event.preventDefault();

    // Obtiene el ID del elemento al que se debe desplazar
    var hash = this.hash;

    // Realiza la animación de desplazamiento
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Agrega el hash (#) a la URL cuando haya terminado de desplazarse (comportamiento de enlace normal)
        window.location.hash = hash;
      });
  });
});


