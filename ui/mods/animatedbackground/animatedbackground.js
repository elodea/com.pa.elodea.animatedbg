var menu_video = localStorage.menu_video;
localStorage.menu_video = "false";

/*determine background to load
if !background {
    background = //default
},
else {
    var background = //from options
}
*/

//check if intro video will play. only play menu if the one time variable is done
//inject background
if(menu_video != "true") {
$("body").append("<div>" +
    "<video width='auto' height='auto' autoplay loop>" +
    "<source src='coui://ui/backgrounds/background_blue.webm'>" +
    "</video>" +
    "</div>"
    );
 }