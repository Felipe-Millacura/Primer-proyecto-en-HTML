$(document).ready(function(){
    var imgItems = $('.slider li').length;
    var imgPos = 1;

    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'color':'#ffffff'})

    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    setInterval(function(){
        nextSlider();
    }, 10000)

    function pagination(){
        var paginationPos = $(this).index() + 1;

        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn();

        $('.pagination li').css({'color':'#9B9B9B'})
        $(this).css({'color':'#ffffff'})

        imgPos = paginationPos;
    }

    function nextSlider(){
        if(imgPos >= imgItems){
            imgPos = 1
        }
        else{
            imgPos++;
        }
        $('.pagination li').css({'color':'#9B9B9B'})
        $('.pagination li:nth-child('+ imgPos +')').css({'color':'#ffffff'})

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }

    function prevSlider(){
        if(imgPos <= 1){imgPos = imgItems;}
        else{imgPos--;}
        $('.pagination li').css({'color':'#9B9B9B'})
        $('.pagination li:nth-child('+ imgPos +')').css({'color':'#ffffff'})

        $('.slider li').hide();
        $('.slider li:nth-child('+ imgPos +')').fadeIn();
    }

    $('.galeria').click(function(e){
        var img = e.target.src;
        var alt = e.target.alt;
        var modal = '<div class="modal" id="galeriazoom"><img src="'+ img +'" alt="'+alt+'" class="modal_img"><div id="cross" class="far fa-times-circle"></div></div>'
        $('body').append(modal);
        $('#cross').click(function(){
            $('#galeriazoom').remove();
        })
    })
})
