const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links .link");

menu.addEventListener("click",() =>{
    navLinks.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    });
});