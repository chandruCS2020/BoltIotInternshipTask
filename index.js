let nav_toggle=document.querySelector(".nav_toggle");
let nav_bar=document.querySelector(".nav-lists");
let nav= document.querySelector(".fa.fa-bars");
nav_toggle.addEventListener("click", function () {
    if (nav_bar.classList.contains("active")) {
        nav_bar.classList.remove("active");
        nav.className="fa fa-bars";
    } else {
        nav_bar.classList.add("active");
        nav.className="fa fa-times";
    }
    });
let box = document.querySelector('.header');
let width = box.offsetWidth;
let height = box.offsetHeight;
console.log(width);
console.log(height);
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}