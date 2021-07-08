/* Creado por JohanMusic */

// Comensamos a declarar las funciones de cada botón de la calculadora
let sonido1 = document.querySelector(".reproductor1")
    let audioEtiqueta1 = document.querySelector("audio")

    // en cada bloque de código, tomamos una referencia a los archivos de audio
// Tanbien, utilizamos el obgeto navigator para dar a cada botón la función de vibración
    function uno() {
      audioEtiqueta1.setAttribute("src", "audios/1.mp3")
      audioEtiqueta1.play()
window.navigator.vibrate(100);
      console.log(`Reproduciendo: ${audioEtiqueta1.src}`)
    }
    // Luego, declaramos un evento de click para cada botón
    sonido1.addEventListener("click", uno);     
    sonido1.addEventListener("msgesturechange", uno);     

let sonido2 = document.querySelector(".reproductor2")
    let audioEtiqueta2 = document.querySelector("audio")

    function dos() {
      audioEtiqueta2.setAttribute("src", "audios/2.mp3")
      audioEtiqueta2.play()
      console.log(`Reproduciendo: ${audioEtiqueta2.src}`)
      window.navigator.vibrate(100);
    }
    sonido2.addEventListener("click", dos);    
    sonido2.addEventListener("msgesturechange", dos);     

    let sonido3 = document.querySelector(".reproductor3")
    let audioEtiqueta3 = document.querySelector("audio")

    function tres() {
      audioEtiqueta3.setAttribute("src", "audios/3.mp3")
      audioEtiqueta3.play()
      console.log(`Reproduciendo: ${audioEtiqueta3.src}`)
      window.navigator.vibrate(100);
    }
    sonido3.addEventListener("click", tres);
    
    let sonido4 = document.querySelector(".reproductor4")
    let audioEtiqueta4 = document.querySelector("audio")

    function cuatro() {
      audioEtiqueta4.setAttribute("src", "audios/4.mp3")
      audioEtiqueta4.play()
      console.log(`Reproduciendo: ${audioEtiqueta4.src}`)
      window.navigator.vibrate(100);
    }
    sonido4.addEventListener("click", cuatro);
    
    let sonido5 = document.querySelector(".reproductor5")
    let audioEtiqueta5 = document.querySelector("audio")

    function sinco() {
      audioEtiqueta5.setAttribute("src", "audios/5.mp3")
      audioEtiqueta5.play()
      console.log(`Reproduciendo: ${audioEtiqueta5.src}`)
      window.navigator.vibrate(100);
    }
    sonido5.addEventListener("click", sinco)
    
    let sonido6 = document.querySelector(".reproductor6")
    let audioEtiqueta6 = document.querySelector("audio")

    function ceis() {
      audioEtiqueta6.setAttribute("src", "audios/6.mp3")
      audioEtiqueta6.play()
      console.log(`Reproduciendo: ${audioEtiqueta6.src}`)
      window.navigator.vibrate(100);
    }
    sonido6.addEventListener("click", ceis)
    
    let sonido7 = document.querySelector(".reproductor7")
    let audioEtiqueta7 = document.querySelector("audio")

    function ciete() {
      audioEtiqueta7.setAttribute("src", "audios/7.mp3")
      audioEtiqueta7.play()
      console.log(`Reproduciendo: ${audioEtiqueta7.src}`)
      window.navigator.vibrate(100);
    }
    sonido7.addEventListener("click", ciete)
    
    let sonido8 = document.querySelector(".reproductor8")
    let audioEtiqueta8 = document.querySelector("audio")

function ocho() {
      audioEtiqueta8.setAttribute("src", "audios/8.mp3")
      audioEtiqueta8.play()
      console.log(`Reproduciendo: ${audioEtiqueta8.src}`)
      window.navigator.vibrate(100);
    }
    sonido8.addEventListener("click", ocho)
    
    let sonido9 = document.querySelector(".reproductor9")
    let audioEtiqueta9 = document.querySelector("audio")

    function nueve() {
      audioEtiqueta9.setAttribute("src", "audios/9.mp3")
      audioEtiqueta9.play()
      console.log(`Reproduciendo: ${audioEtiqueta9.src}`)
      window.navigator.vibrate(100);
    }
    sonido9.addEventListener("click", nueve);
    
    let sonido0 = document.querySelector(".reproductor0")
    let audioEtiqueta0 = document.querySelector("audio")

    function zero() {
      audioEtiqueta0.setAttribute("src", "audios/0.mp3")
      audioEtiqueta0.play()
      console.log(`Reproduciendo: ${audioEtiqueta0.src}`)
      window.navigator.vibrate(100);
    }
    sonido0.addEventListener("click", zero);
    
    let sonidoMas = document.querySelector(".reproductorMas")
    let audioEtiquetaMas = document.querySelector("audio")

    function mas() {
      audioEtiquetaMas.setAttribute("src", "audios/mas.mp3")
      audioEtiquetaMas.play()
      console.log(`Reproduciendo: ${audioEtiquetaMas.src}`)
      window.navigator.vibrate(100);
    }
    sonidoMas.addEventListener("click", mas);
    
    let sonidoMen = document.querySelector(".reproductorMen")
    let audioEtiquetaMen = document.querySelector("audio")

    function men() {
      audioEtiquetaMen.setAttribute("src", "audios/men.mp3")
      audioEtiquetaMen.play()
      console.log(`Reproduciendo: ${audioEtiquetaMen.src}`)
      window.navigator.vibrate(100);
    }
    sonidoMen.addEventListener("click", men);
    
    let sonidoMul = document.querySelector(".reproductorMul")
    let audioEtiquetaMul = document.querySelector("audio")

    function mul() {
      audioEtiquetaMul.setAttribute("src", "audios/mul.mp3")
      audioEtiquetaMul.play()
      console.log(`Reproduciendo: ${audioEtiquetaMul.src}`)
      window.navigator.vibrate(100);
    }
    sonidoMul.addEventListener("click", mul);
    
    let sonidoDib = document.querySelector(".reproductorDib")
    let audioEtiquetaDib = document.querySelector("audio")

    function dib() {
      audioEtiquetaDib.setAttribute("src", "audios/dib.mp3")
      audioEtiquetaDib.play()
      console.log(`Reproduciendo: ${audioEtiquetaDib.src}`)
      window.navigator.vibrate(100);
    }
    sonidoDib.addEventListener("click", dib);

    let sonidoPors = document.querySelector(".reproductorPors")
    let audioEtiquetaPors = document.querySelector("audio")

     function por() {
      audioEtiquetaPors.setAttribute("src", "audios/pors.mp3")
      audioEtiquetaPors.play()
      console.log(`Reproduciendo: ${audioEtiquetaPors.src}`)
      window.navigator.vibrate(100);
    }
    sonidoPors.addEventListener("click", por);
    
    let sonidoSic = document.querySelector(".reproductorSic")
    let audioEtiquetaSic = document.querySelector("audio")

    function sic() {
      audioEtiquetaSic.setAttribute("src", "audios/sic.mp3")
      audioEtiquetaSic.play()
      console.log(`Reproduciendo: ${audioEtiquetaSic.src}`)
      window.navigator.vibrate(100);
    }
    sonidoSic.addEventListener("click", sic);
    
    let sonidoBor2 = document.querySelector(".reproductorBor")
    let audioEtiquetaBor2 = document.querySelector("audio")

    function bor2() {
      audioEtiquetaBor2.setAttribute("src", "audios/bor.mp3")
      audioEtiquetaBor2.play()
      console.log(`Reproduciendo: ${audioEtiquetaBor2.src}`)
      window.navigator.vibrate(300);
    }
    sonidoBor2.addEventListener("click", bor2);
    
    let sonidoigual = document.querySelector(".Igual")
    let audioEtiquetaigual = document.querySelector(".audioIgual")

function igual() {
      audioEtiquetaigual.setAttribute("src", "audios/sonidoIgual.mp3")
      audioEtiquetaigual.play()
      console.log(`Reproduciendo: ${audioEtiquetaigual.src}`)
      window.navigator.vibrate([100, 100, 100]);
    }
    sonidoigual.addEventListener("click", igual);

    let sonidobor = document.querySelector("#reproductorBorrar")
    let audioEtiquetabor = document.querySelector(".audioBorrar")

    function bor() {
      audioEtiquetabor.setAttribute("src", "audios/sonidoBorrar.mp3")
      audioEtiquetabor.play()
      console.log(`Reproduciendo: ${audioEtiquetabor.src}`)
      if (speechSynthesis.speaking) {
        //Si ya está hablando, lo paramos
        speechSynthesis.cancel();
     }
    
    }
    sonidobor.addEventListener("click", bor);

    