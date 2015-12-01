$(document).ready(function() {
    $('.menubtn').click(function() {
        $(this).toggleClass('activemenubtn')
        $('.sidenav').toggleClass('active');
        $('.mainbody').toggleClass('activemb');
    })
});