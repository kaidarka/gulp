$("#header").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".header").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    activeLock()
});
$("#projects").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".projects").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    activeLock()
});
$("#mission").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".mission").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    activeLock()
});
$("#profit").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".profit").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    activeLock()
});
$("#contacts").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".contacts").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
    activeLock()
});
$("#contacts2").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".contacts").offset().top -= 100 // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
function activeLock() {
    $("#header__menu, #header__burger").removeClass('active');
    $("body").removeClass('lock');
}
$(function() {
    $(window).scroll(function(){
        if($(this).scrollTop()>10){
            $('#navigation').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('#navigation').removeClass('fixed');
        }
    });
});
