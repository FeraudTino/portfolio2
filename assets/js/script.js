var scroll = new SmoothScroll('a[href*="#"]');

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    
    if(scroll < 600){
      document.getElementById("top-nav").className = "top-nav";
    }else{
      document.getElementById("top-nav").className = "top-nav-b";
    }
});

$(function () {
  $(".titre").typed({
    strings: ["Développeur Front End / Back End", "Concepteur d'Application", 'Concepteur Développeur d\'Application'],
    typeSpeed: 50,
    backSpeed: 50,
    startDelay: 0,
    backDelay: 500,
    loop: false,
    loopCount: false,
    attr: null });

});
