$("#search-icon").click(function () {
   $(".nav").toggleClass("search");
   $(".nav").toggleClass("no-search");
   $(".search-input").toggleClass("search-active");
 });
 
 $(".menu-toggle").click(function () {
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
 });
 
 function reveal() {
  var reveals = document.querySelectorAll(".fadeIn");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);