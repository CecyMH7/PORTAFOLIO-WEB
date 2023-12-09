let app = document.getElementById('typewriter');

let typewriter = new Typewriter (app, {
    loop: true,
    delay: 75,
    cursor: "<span style='color: #fb4993;'>|</span>",
   })

   typewriter
   .pauseFor(2500)
   .typeString('<span style="color: #fb4993;">Mi mayor pasión es el Deporte y mi modalidad es el Ciclismo de Montaña,compito a Nivel Estatal, Nacional e Internacional en la mejor categoria ¡Femenil Elite!,me encanta destacar y ser de las mejores.</span>') 
   .pauserFor(200)
   .deleteChars(10)
   .start();
   