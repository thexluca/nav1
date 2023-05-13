window.onload = function() {

    const navButton = document.getElementsByClassName("navButton")[0];
    const navMenu = document.getElementsByClassName("navMenu")[0];
    navButton.onclick = () => navMenu.classList.toggle("navMenuOPEN");
    
    const navIcon = document.getElementById('navIcon');
    navIcon.onclick = () => navIcon.classList.toggle('navIconOpen');

}