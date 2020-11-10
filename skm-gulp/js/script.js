function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });



const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - animItemHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');    
                } 
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.nav__list,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
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

$("#sendMail").on("click", function(){
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();

    if(name == ""){
        $("#errorMess").text("Введите имя");
        return false;
    } else if(phone == ""){
        $("#errorMess").text("Введите телефон");
        return false;
    }

    $("#errorMess").text("");

    $.ajax({
        url: './ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'phone': phone},
        dataType: 'html',
        beforeSend: function () {
            $("#sendMali").prop("disabled", true);
        },
        success: function(data) {
            if(!data)
                alert("Ошибка, сообщение не отправлено");
            else
                $("#mailForm").trigger("reset");

                
            $("#sendMail").prop("disabled", false);
        }
    });
});
