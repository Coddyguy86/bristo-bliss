function openNav() {
  document.getElementById("myNav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0vw";
}
function myhome() {
  location.replace("https://coddyguy86.github.io/bristo-bliss/");
}

function mytable() {
  location.replace("https://coddyguy86.github.io/bristo-bliss/booktable.html");
}
function mymenu() {
  location.replace("https://coddyguy86.github.io/bristo-bliss/menu.html");
}
function myarticle() {
  location.replace("https://coddyguy86.github.io/bristo-bliss/pages.html");
}

function mycontact() {
  location.replace("https://coddyguy86.github.io/bristo-bliss/contact.html");
}

function myabout() {
  location.replace("https://coddyguy86.github.io/bristo-bliss/about.html");
}
// for animations

// gsap js linrary for animations

gsap.registerPlugin(ScrollTrigger);

gsap.from(".head", {
  y: "50%",
  duration: 1,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".head",

    toggleActions: "play none none none",
  },
  stagger: 0.5,
});



gsap.from(".form", {
  y: "50%",
  duration: 1,
  delay: 1,
  opacity: 0,
  
});
