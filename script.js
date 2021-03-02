$(document).ready(function(){
  
    var typed = new Typed('.typed', {
        strings: ['', 'Welcome to New Indian Model School - Dubai'],
        smartBackspace: true ,
        loop: true,
        backDelay: 5000,
        backSpeed: 100,
        typeSpeed: 50,


      });



$("#expand").click(function() {
  $("#unhide").toggle(); 
 

  })

  var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 1000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});




})