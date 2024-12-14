function openNav() {
  document.getElementById("myNav1").style.width = "100vw";
}

function closeNav() {
  document.getElementById("myNav1").style.width = "0vw";
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

// gsap library for Animatios

gsap.registerPlugin(ScrollTrigger);

gsap.from(".table", {
  scrollTrigger: {
    trigger: ".table",
    toggleActions: "restart none none none",
  },
  y: "50%",
  duration: 1,
  opacity: 0,

  stagger: 0.5,
});

gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart none none none",
  },
  y: "50%",
  duration: 1,
  opacity: 0,

  stagger: 0.5,
});
