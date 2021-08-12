var menuprincipal = document.querySelector("#menuprincipal");
let audioEtiqueta = document.querySelector("audio")

function menuaudio() {

if (menuprincipal.ariaExpanded == "false") {
menuprincipal.innerHTML="Menú principal. (Abierto)";

      audioEtiqueta.setAttribute("src", "audio/audex/audio.mp3")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)
      document.querySelector("#inicio").focus();
    }

  else {  
    menuprincipal.innerHTML="Menú principal.";
    
    audioEtiqueta .setAttribute("src", "audio/audex/audio1.mp3")
    audioEtiqueta .play()
      console.log(`Reproduciendo: ${audioEtiqueta .src}`)
    
  }

}

menuprincipal.addEventListener("click", menuaudio);