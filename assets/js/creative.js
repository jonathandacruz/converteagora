/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

     
  $( "#callFunctionAPI" ).click(function() {
    $(document).ready(function () {

      var sendInput       = $('#inputURL').val();
      var archiveName     = $('#archiveName').val();
      var sendArchiveName ;
      var pageRangesFirst = $('#pageRangesFirst').val();
      var pageRangesLast  = $('#pageRangesLast').val();
      var pageRanges;
      var paperFormat     = $('#paperFormat').val();
      var pdfWidth        = $('#pdfWidth').val();
      var pdfHeight       = $('#pdfHeight').val();

      var pdfMarginTop    = $('#pdfMarginTop').val();
      var pdfMarginRight  = $('#pdfMarginRight').val();
      var pdfMarginBottom = $('#pdfMarginBottom').val();
      var pdfMarginLeft   = $('#pdfMarginLeft').val();
      
      var valPdfWidth, valPdfHeight, valPdfMarginTop, valPdfMarginRight, valPdfMarginBottom, valPdfMarginLeft;

      
      if ((sendInput).length <= 3) {
        $("#waitingProcessArc").text('Informe obrigatoriamente a URL');
        $("#waitingProcessArc").css('color', 'red');
        return false;
      }else {

        if ((archiveName).length > 30) {
          $("#waitingProcessArc").text('Nao pode ter mais de trinta caracteres, escrever em variavel');
          return false;
        } else if ((archiveName).length == 0 ) {
          sendArchiveName = '&attachmentName=converteagora.pdf';
        } else if ((archiveName).length >= 1 && (archiveName).length <= 30 ) {
          sendArchiveName = '&attachmentName=' + archiveName.trim() +'.pdf';
        };
        //PageRanges
        if (pageRangesFirst >= 1 && pageRangesLast > 1 && pageRangesLast > pageRangesFirst) {
          pageRanges = '&pdf.pageRanges='+ pageRangesFirst + ' - ' + pageRangesLast;
        }else if (pageRangesFirst >= 1 && (pageRangesLast == 0 || pageRangesLast < pageRangesFirst )) {
          pageRanges = '&pdf.pageRanges='+ pageRangesFirst;  
        }else {
          pageRanges = '&';
        };
        if (pdfWidth > 0 && (pdfWidth).length > 0) {
          valPdfWidth = '&pdf.width=' + pdfWidth;  
        }else {
          valPdfWidth = '&';
        };
        if (pdfHeight > 0 && (pdfHeight).length > 0) {
          valPdfHeight = '&pdf.height=' + pdfHeight;  
        }else {
          valPdfHeight = '&';
        }
        //Carregando Margens 
        if (pdfMarginTop > 0 && (pdfMarginTop).length > 0) {
          valPdfMarginTop = '&pdf.margin.top=' + pdfMarginTop + 'cm';  
        }else {
          valPdfMarginTop = '&';
        };
        if (pdfMarginRight > 0 && (pdfMarginRight).length > 0) {
          valPdfMarginRight = '&pdf.margin.right=' + pdfMarginRight + 'cm';  
        }else {
          valPdfMarginRight = '&';
        };
        //
        if (pdfMarginBottom > 0 && (pdfMarginBottom).length > 0) {
          valPdfMarginBottom = '&pdf.margin.bottom=' + pdfMarginBottom + 'cm';  
        }else {
          valPdfMarginBottom = '&';
        };
        if (pdfMarginLeft > 0 && (pdfMarginLeft).length > 0) {
          valPdfMarginLeft = '&pdf.margin.left=' + pdfMarginLeft + 'cm';  
        }else {
          valPdfMarginLeft = '&';
        };
      }  
       
      var counter = 30;
      var interval = setInterval(function() {
      counter--;
      // Display 'counter' wherever you want to display it.
      if (counter <= 0) {
          clearInterval(interval);
          return;
      }else{
        $('#waitingProcessArc').text('Aguarde ' + counter + ' segundos. Estamos processando seu arquivo');
      }
      }, 1000);
      $("#waitingProcessArc").css('color', 'grey');


      $.ajax({
          type: 'GET',
          url: 'https://converteagora-api-url.herokuapp.com/api/render?url=' + sendInput + sendArchiveName + pageRanges + paperFormat + valPdfWidth + valPdfHeight + valPdfMarginTop + valPdfMarginRight + valPdfMarginBottom + valPdfMarginLeft,
          //
          success: function (msg) {
              //Call Api When Sucess
              counter = 0;
              $("#waitingProcessArc").text('Tudo certo, seu download começará em breve');
              $("#waitingProcessArc").css('color', 'green');
              window.location = 'https://converteagora-api-url.herokuapp.com/api/render?url='+ sendInput +sendArchiveName + pageRanges + paperFormat + valPdfWidth + valPdfHeight + valPdfMarginTop + valPdfMarginRight +valPdfMarginBottom + valPdfMarginLeft;

          },
          error: function (request, status, error) {
            $("#waitingProcessArc").text('Encontramos um erro no site solicitado, confira a sessão abaixo');
              alert(error);
          }
      });
  });


  });

    // Validar qual página está
    var pathname = window.location.pathname; 
    if (pathname == "/url-to-pdf"){
      $.ajax({
        type: 'GET',
        url: 'https://converteagora-api-url.herokuapp.com/api/render?url=https://google.com' ,
        //
        success: function (msg) {
          null;
        },
        error: function (request, status, error) {  
          console.log('Erro ao request da API');
        }
        });
    };
    if (pathname == "/"){
      $.ajax({
        type: 'GET',
        url: 'https://converteagora-api-url.herokuapp.com/api/render?url=https://google.com' ,
        //
        success: function (msg) {
          null;
        },
        error: function (request, status, error) {  
          console.log('Erro ao request da API');
        }
        });
    };

    $("#executeFunctionCopy").click(function(){
      $("#textResult").select();
      document.execCommand('copy');
  });
   
  

$('input[type=radio][name=gender]').change(function() {
    if (this.value == 'lowercase') {
         $("#executeFunction" ).click(function() {
         $('#textResult').val($('#textResult').val().toLowerCase());  

         $("#lenghtTextArea").text($("#textResult").val().length);
        }); 
    }
    else if (this.value == 'uppercase') {
         $( "#executeFunction" ).click(function() {
          $('#textResult').val($('#textResult').val().toUpperCase());  
        });
    }
    else if (this.value == 'firstUppercase') {
      $( "#executeFunction" ).click(function() {

      $('#textResult').val($('#textResult').val().toLowerCase());   
      var str = $('#textResult').val();
      var spart = str.split(" ");
		  for ( var i = 0; i < spart.length; i++ ) {
			  var j = spart[i].charAt(0).toUpperCase();
			  spart[i] = j + spart[i].substr(1);
		  }
      $('#textResult').val(spart.join(" ")); });
    }
});

})(jQuery); // End of use strict
