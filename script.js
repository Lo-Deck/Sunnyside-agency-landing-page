const displayMenu = document.getElementById('display-menu');
const menuMobile = document.getElementById('menu-mobile');

displayMenu.addEventListener('click', function( ) {

    if(menuMobile.style.visibility === 'hidden')
    {
        menuMobile.style.visibility = 'visible';
    }
    else
    {
        menuMobile.style.visibility = 'hidden';
    }
    
});


window.onresize = function() {

    if(document.body.clientWidth < 640)
    {    
        menuMobile.style.visibility = 'hidden';
    }
    else
    {
        menuMobile.style.visibility = 'visible';
    }

};