window.onload = function() {

    const navButton = document.getElementsByClassName("navButton")[0];
    const navIcon = document.getElementById("navIcon");
    const navMenu = document.getElementsByClassName("navMenu")[0];
    
    navButton.onclick = () => {
        openCloseNav();
        navMenu.classList.toggle("show");
    }
    
    // openCloseNav is a separate function to fire from multiple events
    const openCloseNav = () => navIcon.classList.toggle("navIconOpen");

    const navItem = document.getElementsByClassName("navItem");
    for(let i=0; i<navItem.length; i++){
        navItem[i].onclick = () => {
            navMenu.classList.toggle("navMenuOPEN");
            navIcon.classList.toggle("navIconOpen");
        }
    }

}