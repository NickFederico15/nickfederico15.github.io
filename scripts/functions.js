$(document).ready(function() {
    window.onresize = function(e) {
        if ($(window).width() < 768) {
            closeNav();
        }  

        if ($(window).width() > 768) {
            closeMobileNav();
        } 
    };
});

$(document).click(function(event) { 
    var $target = $(event.target);
    if(!$target.closest('#sidebar').length && $(window).width() > 768) {
        if($('#sidebar').width() > 0) {
            closeNav();
        }  
    } 

    if(!$target.closest('#mobile-sidebar').length) {
        if($('#mobile-sidebar').width() > 0 && $(window).width() < 768) {
            closeMobileNav();
        }  
    }      
});	

function openNav() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("blackout").style.display = "block";
    $('#sidebar .menu-container').css('width', '300px');
    $('.nav-name').css('display', 'block');
    $(document.body).css('margin-left', '300px');
    $('#ham-menu').attr("onclick","closeNav()");
}
  
function closeNav() {
    document.getElementById("sidebar").style.width = "73px";
    document.getElementById("blackout").style.display = "none";
    $('#sidebar .menu-container').css('width', '100%');
    $('.nav-name').css('display', 'none');
    $(document.body).css('margin-left', '73px');
    $('#ham-menu').attr("onclick","openNav()");
}

function openMobileNav() {
    document.getElementById("mobile-sidebar").style.width = "300px";
    document.getElementById("blackout").style.display = "block";
}
     
function closeMobileNav() {
    document.getElementById("mobile-sidebar").style.width = "0";
    document.getElementById("blackout").style.display = "none";
}
