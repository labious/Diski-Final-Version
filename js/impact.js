// number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum : countTo
    },
    {
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });  
  });

  /*  GSAP animation  */
  gsap.from("#logo-image", {duration: 2, x: 50, opacity: 1, scale: 1});
  gsap.from("#nav-links", {duration: 1, x: 100, opacity: 0, scale: 1});
  gsap.from("#sidenav-trigger", {duration: 2, x: -300, opacity: 0, scale: 0.5});

    /* Sponsor Splide */
  document.addEventListener( 'DOMContentLoaded', function () {
    var w = window.innerWidth;
    let per_page = 1; 
    //innitialize slide
    new Splide( '#splidez',{
      type: 'loop',
      perPage: per_page,
      autoplay: true,
      arrows : false,
      interval: 3500, // How long to display each slide
      pauseOnHover: false, // must be false
      pauseOnFocus: false, // must be false
      resetProgress: true
    } ).mount();
  } );

