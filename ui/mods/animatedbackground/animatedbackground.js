var intro_played = localStorage.has_played_release_intro_PAExpansion1;

if(intro_played = "true") {
$("body").append("<div>" +
    "<video width='auto' height='auto' autoplay loop>" +
    "<source src='coui://ui/backgrounds/background_red.webm'>" +
    "<source src='coui://ui/backgrounds/mario.webm'>" +
    "</video>" +
    "</div>"
    );
}