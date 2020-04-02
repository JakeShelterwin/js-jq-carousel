// DESCRIZIONE:
// ricreo lo slider come fatto questa mattina
// creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane selezionato);

$(document).ready(function(){

  // gestione evento quando clicco su prev
  $('.prev').click(
    //funzione di CallBack
      prevImg
  );

  // gestione evento quando clicco su next
  $('.next').click(
    //funzione di CallBack
      nextImg
  );

  //Gestione evento quando clicco sui sui pallini:
  $('.nav').children().click(
      cliccaPallino
  );

// funzione prevImg
 function prevImg() {
   // salvo il riferimento all'img attiva al momento del click
   var imgActive = $('.images img.active');
   // console.log(imgActive);
   // salvo il pallino attivo
   var ballActive = $('.nav i.active');

   // tolgo la classe active all'img selezionata
   imgActive.removeClass('active');
   // tolgo la classe active al pallino selezionato
   ballActive.removeClass('active');

   // testo gli estremi grazie alle classi last e first:
   //se l'immagine ha la classe first, dai active all'immagine che ha la classe last
   if(imgActive.hasClass('first')){
     $('.images img.last').addClass('active');
     $('.nav i.last').addClass('active');
   } else {
     // altrimenti applica la classe active all'immagine precedente
     imgActive.prev().addClass('active');
     ballActive.prev().addClass('active');
     // console.log(imgActive.next());
   }

 }

  // funzione next
  function nextImg() {
    // salvo il riferimento all'img attiva al momento del click
    var imgActive = $('.images img.active');
    // console.log(imgActive);
    // salvo il pallino attivo
    var ballActive = $('.nav i.active');

    // tolgo la classe active all'img selezionata
    imgActive.removeClass('active');
    // tolgo la classe active al pallino selezionato
    ballActive.removeClass('active');

    // testo gli estremi grazie alle classi last e first:
    //se l'immagine ha la classe last, dai active all'immagine che ha la classe fist
    if(imgActive.hasClass('last')){
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    } else {
      // altrimenti applica la classe active all'immagine successiva
      imgActive.next().addClass('active');
      ballActive.next().addClass('active');
      // console.log(imgActive.next());
    }
  }

 //Gestione evento quando clicco sui sui pallini:
 //deve evidenziare quello cliccato e mostrare l'immagine corrispondente
  function cliccaPallino(){
    //assegno a var il selettore di ogni immagine dentro .images
    var immagini = $('.images img');
    // debug: controllo d'averlo fatto
    // console.log(immagini);

    //rimuovo la classe active all'immagine che ce l'ha  (in realtà cerca di toglierla a tutte)
    immagini.removeClass('active');

    //tolgo la classe active al pallino che ce l'ha
    $('.nav').children().removeClass("active");
    //aggiungo la classe active al pallino SU CUI CLICCO
    $(this).addClass("active");
    // nella variabile numeroPallino salvo l'indice del pallino su cui sto cliccando
    var numeroPallinoCliccato = $(this).index();
    //debug: controllo che effettivamente funzioni
    // console.log(numeroPallinoCliccato);

    //aggiungo la classe "active" all'immagine di "immagini" che ha un indice
    //identico a quello del pallino cliccato, così la rendo visibile
    immagini.eq(numeroPallinoCliccato).addClass("active");

  }


});
