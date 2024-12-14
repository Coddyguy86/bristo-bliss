function openNav() {
  document.getElementById("myNav2").style.width = "100vw";
}

function closeNav() {
  document.getElementById("myNav2").style.width = "0vw";
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

// for Animations

//  gsap js library

gsap.from(".conto", {
  duration: 1,
  opacity: 0,
  delay: 0.5,
  y: "100%",
  stagger: 0.5,
});
gsap.from(".conta", {
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 1,
  stagger: 1,
});
gsap.registerPlugin(ScrollTrigger);

gsap.from(".playh", {
  scrollTrigger: {
    trigger: ".playh",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  delay: 1,
});

gsap.from(".i", {
  scrollTrigger: {
    trigger: ".i",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  delay: 1,
});

gsap.from(".menus", {
  scrollTrigger: {
    trigger: ".menus",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  delay: 1,
});

gsap.from(".part", {
  scrollTrigger: {
    trigger: ".part",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  stagger: 0.5,
  y: "50%",
});

gsap.from(".rectangle", {
  scrollTrigger: {
    trigger: ".rectangle",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  stagger: 0.5,
  delay: 1,
  y: "50%",
});

gsap.from(".contai", {
  scrollTrigger: {
    trigger: ".contai",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
});

gsap.from(".section6h", {
  scrollTrigger: {
    trigger: ".section6h",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0,
  stagger: 0.5,
});

gsap.from(".fedback", {
  scrollTrigger: {
    trigger: ".fedback",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0,
  stagger: 0.5,
});
