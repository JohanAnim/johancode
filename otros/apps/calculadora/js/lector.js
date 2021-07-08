
/* Creado por JohanMusic */
/* Lector de voz para la web */

$(document).on('mouseleave', exitIntent);
  function exitIntent(e){
     if( e.clientY < 0 ) {
       responsiveVoice.cancel();
       responsiveVoice.speak('Barra de herramientas superior para maximisar, minimisar, restaurar y serrar esta ventana.');
     }
  }
  responsiveVoice.enableEstimationTimeout = false;
  
  $('a').keyup(function(e) {
   console.log('keyup called');
   var code = e.keyCode || e.which;
   if (code == '9') {
   responsiveVoice.cancel();
    responsiveVoice.speak('Enlace'+$(':focus').text());
   }
});

$('button').keyup(function(e) {
   console.log('keyup called');
   var code = e.keyCode || e.which;
   if (code == '9') {
    setTimeout(responsiveVoice.speak($(':focus').text()+'Botón '),1000);
   }
});

$('textarea').keyup(function(e) {
   console.log('keyup called');
   var code = e.keyCode || e.which;
   if (code == '9') {
   responsiveVoice.cancel();
    responsiveVoice.speak('Cuadro de edición multi linia '+$(':focus').attr('placeholder'));
   }
});
$('select').keyup(function(e) {
   console.log('keyup called');
   var code = e.keyCode || e.which;
   if (code == '9') {
   responsiveVoice.cancel();
    responsiveVoice.speak('Cuadro combinado '+$(':focus').text());
   }
});
$('div').keyup(function(e) {
   console.log('keyup called');
   var code = e.keyCode || e.which;
   if (code == '9') {
   responsiveVoice.cancel();
    responsiveVoice.speak('Elemento '+$(':focus').text());
   }
});

shortcut.add("ctrl", function(){ 
   responsiveVoice.cancel();
},{
   'propagate':true,
   'target': document.body
});