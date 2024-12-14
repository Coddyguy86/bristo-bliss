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


// for Animations



// gsap animations js library


gsap.from(".content", {
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 1,
  stagger: 1,
});

gsap.from(".section1para", {
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 1.5,
});

gsap.from(".btns", {
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 1.6,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".section2h", {
  y: "50%",
  duration: 1,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section2",

    toggleActions: "play none none none",
  },
});



gsap.from(".container1", {
  scrollTrigger: {
    trigger: ".container1",
    toggleActions: "play none none none",
  },
  y: "50%",
  duration: 1,
  opacity: 0,

  stagger: 0.2,
});

gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "play none none none",
  },
  y: "50%",
  duration: 1,
  opacity: 0,

  stagger: 0.2,
});

gsap.from(".container2h", {
  scrollTrigger: {
    trigger: ".container2h",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0.5,
});

gsap.from(".container2p1", {
  scrollTrigger: {
    trigger: ".container2p1",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0.5,
});

gsap.from(".container2p2", {
  scrollTrigger: {
    trigger: ".container2p2",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0.5,
});

gsap.from(".container2btn", {
  scrollTrigger: {
    trigger: ".container2btn",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0.5,
});

gsap.from(".section4h", {
  scrollTrigger: {
    trigger: ".section4h",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0.8,
});

gsap.from(".box1", {
  scrollTrigger: {
    trigger: ".box1",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0.8,
  stagger: 0.5,
});

gsap.from(".contain1", {
  scrollTrigger: {
    trigger: ".contain1",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0.8,
  stagger: 0.5,
});

gsap.from(".cont", {
  scrollTrigger: {
    trigger: ".cont",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  y: "50%",
  delay: 0,
  stagger: 0.2,
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

gsap.from(".headingh", {
  scrollTrigger: {
    trigger: ".headingh",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  x: "100%",

  delay: 1,
});

gsap.from(".articlebtn", {
  scrollTrigger: {
    trigger: ".articlebtn",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  delay: 1,
  x: "-100%",
});


gsap.from(".article1", {
  scrollTrigger: {
    trigger: ".article1",
    toggleActions: "play none none none",
  },
  duration: .5,
  opacity: 0,

  y: "50%",

});

gsap.from(".arti", {
  scrollTrigger: {
    trigger: ".arti",
    toggleActions: "play none none none",
  },
  duration: 1,
  opacity: 0,
  delay: .5,
  y: "100%",
  stagger: .5,
});
