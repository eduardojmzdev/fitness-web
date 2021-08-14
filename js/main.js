$(document).ready(function(){
    $('#nav-icon3').click(function(){
        console.log("clicked");
        $('#menu_op').toggleClass('active');
        $('#menu_op').toggleClass('borrar');
        $("#nav-icon3").toggleClass('open');
    });

});

$("#triangle").click(function(){
    console.log('arrow')
    goHome();
});

$("#navhome").click(function(){
    $( "#nav-icon3" ).trigger( "click" );
    goHome();
})

$("#navservices").click(function(){
    $( "#nav-icon3" ).trigger( "click" );
    goServices();
})

$("#navevents").click(function(){
    $( "#nav-icon3" ).trigger( "click" );
    goEvents();
})

$("#navabout").click(function(){
    $( "#nav-icon3" ).trigger( "click" );
    goAbout();
})

$("#logo").click(function(){
    $( "#nav-icon3" ).trigger( "click" );
    goInicio();
})

function goHome() {
    var h1 = $("#home").position();
    $('html, body').animate({
        scrollTop: h1.top-58
    }, 800);
    return false;
}

function goServices() {
    var h1 = $("#services").position();
    $('html, body').animate({
        scrollTop: h1.top-58
    }, 800);
    return false;
}

function goEvents() {
    var h1 = $("#events").position();
    $('html, body').animate({
        scrollTop: h1.top-58
    }, 800);
    return false;
}

function goAbout() {
    var h1 = $("#about").position();
    $('html, body').animate({
        scrollTop: h1.top-58
    }, 800);
    return false;
}

function goInicio() {
    var h1 = $("#navbar").position();
    $('html, body').animate({
        scrollTop: h1.top-58
    }, 800);
    return false;
}

ScrollReveal().reveal('#main_screen, #home, #training, #services, #events, #about',{ delay: 250 });

// function to navbar stiky
$(document).scroll(function(){
    var navbarPos=-($("#navbar-container").position().top);
    // console.error(navbarPos);
    var scrollTop = $(window).scrollTop();
    // console.log(scrollTop);
    if (0 <= scrollTop) {
        // mainWrap.css("height" , mainHeight);
        $("#navbar-container").addClass("stiky");
        var msg1=$("#main_screen");
        msg1.css("margin-top","68px");
    } else {
        $("#navbar-container").removeClass("stiky");
        var msg1=$("#main_screen");
        msg1.css("margin-top","0px");
    }
})

const sections = document.querySelectorAll('.section[id]')
// console.log(sections)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        // console.log(current)
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 60;
        sectionId = current.getAttribute('id')
        // console.log(scrollY+' > '+sectionTop+' && '+scrollY+" <= "+sectionTop+" + "+sectionHeight)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('#nav'+sectionId).classList.add('active-link')
            // document.querySelector('.navbar li[id="' + sectionId + '"]').classList.add('active-link')
        }else{
            document.querySelector('#nav'+sectionId).classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


