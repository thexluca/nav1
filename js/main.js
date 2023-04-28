window.onload = function() {

    const navButton = document.getElementsByClassName("navButton")[0];
    const navMenu = document.getElementsByClassName("navMenu")[0];
    const navMenuOpenClose = () => navMenu.classList.toggle("navMenuOPEN");
    navButton.onclick = navMenuOpenClose; 

}