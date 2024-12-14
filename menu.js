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

// for Animations

// gsap animations js library
gsap.registerPlugin(ScrollTrigger);

gsap.from(".m", {
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 1,
  stagger: 0.5,
});

gsap.from(".section2", {
  scrollTrigger: {
    trigger: ".section2",
    toggleActions: "play none none none",
  },
  y: "10%",
  duration: 1,
  opacity: 0,

 
});

gsap.from(".sec1", {
  scrollTrigger: {
    trigger: ".sec1",
    toggleActions: "play none none none",
  },
  y: "50%",
  duration: 1,
  opacity: 0,
  delay: 1,
  stagger: 0.5,
});



gsap.from(".container", {
  scrollTrigger: {
    trigger: ".container",
    toggleActions: "play none none none",
  },
  y: "50%",
  duration: 1,
  opacity: 0,
  delay: 1.3,
  stagger: 0.5,
});
