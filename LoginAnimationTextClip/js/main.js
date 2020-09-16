$(document).ready(function() {
    $(".div-wrap").fadeIn().removeClass("d-none");    
    
    $(".username-input").removeClass("username-input-fade")

    .focusin(function() {
        $(this).addClass("username-input-fade").fadeIn();
    })
    .focusout(function() {
        $(this).removeClass("username-input-fade").fadeTo();
    });

    $(".password-input").removeClass("password-input-fade")
    
    .focusin(function() {
        $(this).addClass("password-input-fade").fadeIn();
    })
    .focusout(function() {
        $(this).removeClass("password-input-fade").fadeTo();
    });;
});
