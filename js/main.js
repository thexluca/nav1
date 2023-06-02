window.onload = function() {

    const navIcon = document.getElementById("navIcon");
    const navMenu = document.getElementsByClassName("navMenu")[0];
    // openCloseNav is a separate function to fire from multiple events
    const openCloseNav = () => {
        navIcon.classList.toggle("navIconOpen");
        navMenu.classList.toggle("show");
    }
    
    const navButton = document.getElementsByClassName("navButton")[0];
    navButton.onclick = () => {
        openCloseNav();
    }

    const navItem = document.getElementsByClassName("navItem");
    for(let i=0; i<navItem.length; i++){
        navItem[i].onclick = () => {
            if(window.innerWidth < 768){
                openCloseNav();
            }
        }
    }

}