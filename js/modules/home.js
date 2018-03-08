var home = {
	init: function(){
    this.geral();
    this.parallax();
    this.map();
  },

  geral: function() {

    // placeholder no ie
    $('input, textarea').placeholder();

    // mascara telefone
    var maskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {onKeyPress: function(val, e, field, options) {
            field.mask(maskBehavior.apply({}, arguments), options);
        }
    };
    $('#telefone').mask(maskBehavior, options);

    //mascara money
    $('#valor').mask('#.##0,00', {reverse: true}); 

    // validação
    $('form').each(function() {  
      $(this).validate({      
        errorPlacement: function(error,element) {
          return true;
        }
      });
    });

    $('form').submit(function() {
      $(this).find("button[type='submit']").prop('disabled',true);
    });
  },

  parallax: function() {

    //efeito parallax
    if ($(window).width() > 1170) {
      $('.parallax').each(function() {
        $(window).scroll(function() {
          var yPos = -($(window).scrollTop() / $('.parallax').data('speed'));
          var bgPos = '50%' + yPos + 'px';

          $('.parallax').css('background-position', bgPos);
        });
      });
    } 
  },

  map: function() {

    //exibir mapa
    var map = {
      zoom: 8,
      scrollwheel: false,
      center: new google.maps.LatLng(-8.057585,-36.746032),
      panControl: false
    },

    t = new google.maps.Map(document.getElementById("mapa"), map);

    //funcao selecao filiais
    $(".location .address__box").each(function(e, n) {
      var r = $(n).data("latitude"),
          i = $(n).data("longitude"),
          s = new google.maps.LatLng(r, i),
          l = new google.maps.Marker({
            position: s,
            map: t,
            animation: google.maps.Animation.DROP
          });
      }), 

    $(document).on("click", ".location .address__box", function(e) {
      e.preventDefault();
      var n = $(this).data("latitude"),
          r = $(this).data("longitude");
      t.panTo(new google.maps.LatLng(n, r)), t.setZoom(18), $(".location .address__box").removeClass("active"), $(this).addClass("active")
    });

    }
}

home.init();