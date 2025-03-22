// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

const slides = document.querySelectorAll(".slide");
let counter = 0;

// GSAP Timeline for Parallax Animation
let png1 = document.querySelectorAll(".png1"); 
let png2 = document.querySelectorAll(".png2"); 

gsap.to(png1, {
  y: -700, // Moves at half speed for parallax effect
  duration: 2.5,
  ease: "power2.inOut",
  scale: 1,
  repeat: -2,
  // yoyo:true,
});

gsap.to(png2, {
  // y: -10, // Moves at half speed for parallax effect
  duration: 10,
  ease: "power2.inOut",
  repeat:-1,
  yoyo:true,
  scale: 1.4,
});

const slideImages = () => {
  gsap.to(slides, {
    y: `-${counter * 100}%`, // Moves the slides horizontally
    duration: 1,
    ease: "power2.inOut",
  });

  // Parallax Effect on PNG Images (Foreground moves slower)

  gsap.to(".png3", {
    y: `${counter * 50}%`, // Moves at half speed for parallax effect
    duration: 5,
    ease: "bounce",
    repeat: -1,
    yoyo: true,
  });
  gsap.to(".text1", {
    y: `${counter * 30}%`,
    duration: 3,
    ease: "power2.inOut",
    repeat:-1,
    yoyo:true
  });
  gsap.to(".heading1", {
    y: `${counter * 100}%`,
    duration: 2.1,
    delay: 1,
    ease: "power2.inOut",
  });
  gsap.to(".text2", {
    y: `-${counter * 150}%`,
    duration: 2.5,
    ease: "power2.inOut",
  });
  gsap.to(".heading2", {
    y: `-${counter * 100}%`,
    duration: 2.1,
    delay: 1,
    ease: "power2.inOut",
  });
  gsap.to(".text3", {
    y: `-${counter * 80}%`,
    duration: 2,
    ease: "power2.inOut",
  });
  gsap.to(".heading3", {
    y: `-${counter * 50}%`,
    duration: 2.1,
    delay: 0.5,
    ease: "power2.inOut",
  });
};

// Next Slide
const nextSlide = () => {
  if (counter < slides.length - 1) {
    counter++;
    slideImages();
  }
};

// Previous Slide
const prevSlide = () => {
  if (counter > 0) {
    counter--;
    slideImages();
  }
};
