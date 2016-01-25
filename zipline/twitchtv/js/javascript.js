//STREAM LIST

$(document).ready(function() {
    
    //ONLINE TAB
    $('.online').click(function() {
        $('.offline').removeClass('active');
        $('.all').removeClass('active');
        $('.online').addClass('active');
        $('.online').css('border-top', "5px solid green");
        $('.offline').css('border-top', "none");
        $('.all').css('border-top', "none");
    });
    
    
    //OFFLINE TAB
    $('.offline').click(function() {
        $('.offline').addClass('active');
        $('.online').removeClass('active');
        $('.all').removeClass('active');
        $('.offline').css("border-top", "5px solid red");
        $('.online').css("border-top", "none");
        $('.all').css("border-top", "none");
    });
    
    //ALL TAB
    $('.all').click(function() {
        $('.offline').removeClass('active');
        $('.all').addClass('active');
        $('.online').removeClass('active');
        $('.all').css('border-top', '5px solid blue');
        $('.online').css('border-top', 'none');
        $('.offline').css('border-top', 'none');
    });
});