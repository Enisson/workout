var menu = document.querySelector(".nav");
var logo = document.querySelector(".logo-responsive img");
var menuOpen = document.querySelector("#menu-open");
var htmlscroll = document.querySelector("html");
function menuOp() {
    if (menu.style.right == '-500px') {
        menu.style.right = '0'; 
        logo.style.display = 'block';  
        htmlscroll.style.scrollBehavior = 'auto';   
    } else {
        menu.style.right = '-500px';
        logo.style.display = 'none';
    }
}

function menuNav() {             /* menu nav transition*/

    if (menuOpen.style.display == 'block' && menu.style.right == '-500px'){
            menu.style.right = '0'; 
            logo.style.display = 'block';
        } else {
            menu.style.right = '-500px';
            logo.style.display = 'none';
    }
}

