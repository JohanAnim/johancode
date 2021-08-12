var menuprincipal = document.querySelector("#menuprincipal");
let audioEtiqueta = document.querySelector("audio")

function menuaudio() {
if (menuprincipal.ariaExpanded == "false") {
  menuprincipal.innerHTML="Menú principal. (Abierto)";
  
      audioEtiqueta.setAttribute("src", "audio/audex/audio.mp3")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
    
    }

  else {  
    menuprincipal.innerHTML="Menú principal.";
    
    audioEtiqueta .setAttribute("src", "audio/audex/audio1.mp3")
    audioEtiqueta .play()
      console.log(`Reproduciendo: ${audioEtiqueta .src}`)
  }
  
}
  
//Función para establecer el foco al elemento "dni"

const setFocusDNI = (event) => {
  $('.homeFocus').focus();
}

// Añadimos nuestra función para manejar el evento del elemento tipo `Collapse`
$('.collapse').on('shown.bs.collapse', setFocusDNI);

menuprincipal.addEventListener("click", menuaudio);