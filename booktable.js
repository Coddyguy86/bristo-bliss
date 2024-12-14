function openNav() {
  document.getElementById("myNav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0vw";
}
function myhome() {
  location.replace("http://192.168.1.2:3000/index.html");
}

function mytable() {
  location.replace("http://192.168.1.2:3000/booktable.html");
}
function mymenu() {
  location.replace("http://192.168.1.2:3000/menu.html");
}
function myarticle() {
  location.replace("http://192.168.1.2:3000/pages.html");
}

function mycontact() {
  location.replace("http://192.168.1.2:3000/contact.html");
}

function myabout() {
  location.replace("http://192.168.1.2:3000/about.html");
}

// for Animation
// gsap animations for js

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
  scrollTrigger: {
    trigger: ".form",

    toggleActions: "play none none none",
  },
});
