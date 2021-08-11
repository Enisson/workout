function menuOp() {
    let menu = document.querySelector(".nav");
    let logo = document.querySelector(".logo img");

    if (menu.style.right == '-200px') {
        menu.style.right = '0'; 
        logo.style.width = '150px';
        logo.style.position = 'fixed';
        logo.style.top = '25px';
        logo.style.left = '15px';
        logo.style.background = '#1F1C26';
    } else {
        menu.style.right = '-200px';
        logo.style.position = 'relative';
        logo.style.width = '237px';
    }
}

