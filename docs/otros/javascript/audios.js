var menuprincipal = document.querySelector("#menuprincipal");
function menuaudio() {

if (menuprincipal.innerHTML == "Menú principal.") {
menuprincipal.innerHTML="Menú principal";

    let audioEtiqueta = document.querySelector("audio")

      audioEtiqueta.setAttribute("src", "audio/audex/audio.mp3")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)

  }

  else {  
    menuprincipal.innerHTML="Menú principal.";
    
    let audioTas = document.querySelector("audio")

      audioTas.setAttribute("src", "audio/audex/audio1.mp3")
      audioTas.play()
      console.log(`Reproduciendo: ${audioTas.src}`)
    
  }

}

menuprincipal.addEventListener("click", menuaudio);