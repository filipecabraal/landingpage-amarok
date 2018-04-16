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
    $('.imbiribeira').click(function(e) {
      e.preventDefault();

      $('#imbiribeira').css('display', 'block');
      $('#boaviagem').css('display', 'none');
      $('#jaboatao').css('display', 'none');
    });    

    $('.jaboatao').click(function(e) {
      e.preventDefault();

      $('#jaboatao').css('display', 'block');
      $('#boaviagem').css('display', 'none');
      $('#imbiribeira').css('display', 'none');
    });    

    $('.boaviagem').click(function(e) {
      e.preventDefault();

      $('#boaviagem').css('display', 'block');    
      $('#jaboatao').css('display', 'none');
      $('#imbiribeira').css('display', 'none');
    });
  }
}

home.init();