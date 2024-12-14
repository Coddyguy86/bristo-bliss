function openNav() {
  document.getElementById("myNav1").style.width = "100vw";
}

function closeNav() {
  document.getElementById("myNav1").style.width = "0vw";
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
