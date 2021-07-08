// creado por JohanMusic
// Atajos abrebiados de teclado para calcular
/* Atajos de teclado */
shortcut.add("1",function() {
   add("1");
uno();   
});
   shortcut.add("2",function() {
      add("2");
dos();
   });
      shortcut.add("3",function() {
         add("3");
      tres();
      });
         shortcut.add("4",function() {
            add("4");
         cuatro();
         });
            shortcut.add("5",function() {
               add("5");
            sinco();
            });
               shortcut.add("6",function() {
                  add("6");
               ceis();   
               });
                  shortcut.add("7",function() {
                     add("7");
                  ciete();   
                  });
                     shortcut.add("8",function() {
                        add("8");
                     ocho();
                     });
                        shortcut.add("9",function() {
                           add("9");
                        nueve(); 
                        });
                           shortcut.add("0",function() {
                              add("0");
                           zero();   
                           });
                              shortcut.add("space",function() {
                                 add(" ");
                                 });
                              shortcut.add("backspace",function() {
                                 del()
                                 bor2()   
                              bor();
                              },{
                                 'propagate':true,
                                 'type':'keydown',
'target':document.querySelector("#result")
                              });
                              shortcut.add("enter",function() {
                                 calc();
                                 igual()
                              if (document.querySelector("#playbutton")) {
                                 document.querySelector("#playbutton").click();
                              }   
                              },{
                                 'propagate':true,
                                 'type':'keydown',
                                 'target':document.querySelector("#result")
                              });

                              