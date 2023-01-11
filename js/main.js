$(document).ready(function () {
    let btnMenuMobile = $(".btn-menumobile");
    $(btnMenuMobile).on('click', function() {
        $('.nav-container ul').toggleClass('open');
    })
})