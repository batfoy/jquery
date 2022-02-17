$(document).ready(function() { //обработчик события, не позволяющий скриптам выполняться до загрузки страницы
    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });
    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
    
});