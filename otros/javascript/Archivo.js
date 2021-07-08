/* Escrito por JohanMusic */
let a1 = document.querySelector("body");
let a2 = document.querySelector("#mos");
let a3 = document.querySelector(".configuración");
let ace = document.querySelector("article");
let ace3 = document.querySelector(".dropbtn");        
let div1 = document.querySelector("div");
        let ace1 = document.querySelector("ol");
        /*Funciones a ejecutar*/
        function off(){
          a1.style.fontSize = "16px";
       }
       function on(){
       a1.style.fontSize = "30px";
       }
       function configurar(){
        a2.style.visibility = "visible";
        a3.innerText = 'Configuración abierta';


      }
        function off2(){
          a1.style.fontSize = "40px";
       }
       function on2(){
       a1.style.fontSize = "50px";
       }
         function setBgColor2(){
		  ace.style.visibility = "hidden";
      a2.style.visibility = "hidden";
      a3.innerText = 'Abrir configuración'; 
      ace3.innerText = 'Mostrar opciones';
  }
        function setBgColor3(){
    ace.style.visibility = "visible";
    ace3.innerText = 'Opciones mostradas';
  }
function ventana(){
  alert("Hola, bienvenidos a todos a mi sitio web. Prontamente añadiré más contenido para que lo disfruten, gracias☺.");
}
function lista1(){
  ace1.style.visibility = "visible";
}
function lista2(){
  ace1.style.visibility = "hidden";
}
  function remHov(){
          div1.className = div1.className.replace(/\bnavbar a:hover\b/g,"");
  }