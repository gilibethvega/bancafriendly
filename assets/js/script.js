$(function () {

  $("a").click(function(event){
    if (this.hash !== "") {
      event.PreventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 1800, function(){
        window.location.hash = gato;
      });
    }
  })

  $('[data-toggle="popover"]').popover()
})
