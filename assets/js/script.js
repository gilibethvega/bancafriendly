$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });
<<<<<<< HEAD

  $('[data-toggle="popover"]').popover();

});
=======

  $('[data-toggle="popover"]').popover();

});

>>>>>>> master
