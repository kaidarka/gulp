$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.nav__list,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});