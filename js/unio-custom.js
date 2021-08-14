// ------------------------------------------------
// Project Name: Unio Coming Soon & Landing Page Template
// Project Description: Unio - colorful and stylish coming soon & landing page template to kick-start your project
// Tags: unio, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
// Version: 1.0.0
// Build Date: March 2020
// Last Update: March 2020
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: unio-custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. Typed.js Plugin Settings
//  3. Swiper Slider Settings
//  4. Skillbars Settings
//  5. YTPlayer Settings
//  6. Vegas Settings
//  7. KBW-Countdown Settings
//  8. Mailchimp Notify Form
//  9. Write a Line Form
//  10. ParticlesJS Backgrounds
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

/**
 * Slider Starts
 */
const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const paginate = document.querySelector(".paginate");

const slideLength = document.querySelectorAll(".right-slide div").length;
let activeSlideIndex = 0;

const gallerySection = document.querySelector(".gallery-section");

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const slideHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * slideHeight
  }px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
  paginateCircle();
  upButton.disabled = true;
  downButton.disabled = true;
  setTimeout(() => {
    upButton.disabled = false;
    downButton.disabled = false;
  }, 1000);
};

// Listen for scroll events

gallerySection.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    downButton.click();
  } else if (event.deltaY > 0) {
    upButton.click();
  }
});
/**
 * Slider Ends
 */
const paginateCircle = () => {
  paginate.innerHTML = "";
  for (let i = 0; i < slideLength; ++i) {
    paginate.innerHTML += `
    <div class="circle" 
    style = "
    ${
      i === activeSlideIndex
        ? `
      background-color: white;
      
      `
        : `
      background-color: grey;
      
      
      `
    }
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    right: 1%;
    cursor: pointer;
    top: ${window.innerHeight / 2 - (20 * (slideLength - i)) / 2 + i * 20}px;
    z-index = 200;
    transition : 0.7s ease-in-out;
    
    "/>
    `;
  }
  const circles = document.querySelectorAll(".circle");

  for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", () => {
      const slideHeight = sliderContainer.clientHeight;

      activeSlideIndex = i;
      slideRight.style.transform = `translateY(-${
        activeSlideIndex * slideHeight
      }px)`;
      slideLeft.style.transform = `translateY(${
        activeSlideIndex * slideHeight
      }px)`;
      changeCircleColor();
    });
  }
};
window.addEventListener("resize", paginateCircle);

paginateCircle();

const circles = document.querySelectorAll(".circle");
const changeCircleColor = () => {
  for (let i = 0; i < slideLength; ++i) {
    circles[i].style.backgroundColor =
      i === activeSlideIndex ? "white" : "grey";
  }
};
/////////////////////////////////////////////////////////////////////////
$(window).on("load", function () {
  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  $(".loader-logo").removeClass("fadeIn").addClass("fadeOut");
  $(".loader").addClass("is-animated");

  setTimeout(function () {
    $(".loader").addClass("loaded");
    $("body").addClass("loaded");
    $("#main").fadeIn(0, function () {
      $("#main").addClass("active animate-in");
      $("#home-trigger").addClass("active-link");
    });
  }, 1600);
  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-headline");
  if (animatedHeadline.length) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      loop: true,
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 2500,
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Swiper Slider Settings Start
  // --------------------------------------------- //
  setTimeout(function () {
    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 0,
      speed: 600,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, 1900);
  // --------------------------------------------- //
  // Swiper Slider Settings End
  // --------------------------------------------- //
});

$(function () {
  ("use strict");

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $(".skillbar").skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // YTPlayer Settings Start
  // --------------------------------------------- //
  var bgndVideo = $("#bgndVideo");

  if (bgndVideo.length) {
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: "#video-wrapper",
      showControls: false,
      autoPlay: true,
      loop: true,
      startAt: 0,
      quality: "default",
    });
  }
  // --------------------------------------------- //
  // YTPlayer Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $("#bgndKenburns");
  if (bgndKenburns.length) {
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: "fade2",
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/bg-kenburns-1.jpg" },
        { src: "img/backgrounds/bg-kenburns-2.jpg" },
        { src: "img/backgrounds/bg-kenburns-3.jpg" },
      ],
      animation: [
        "kenburnsUp",
        "kenburnsDown",
        "kenburnsLeft",
        "kenburnsRight",
      ],
    });
  }

  var bgndKenburnsFull = $("#bgndKenburnsFull");
  if (bgndKenburnsFull.length) {
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 10000,
      transition: "fade2",
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/bg-fullscreen-1.jpg" },
        { src: "img/backgrounds/bg-fullscreen-2.jpg" },
        { src: "img/backgrounds/bg-fullscreen-3.jpg" },
      ],
      animation: [
        "kenburnsUp",
        "kenburnsDown",
        "kenburnsLeft",
        "kenburnsRight",
      ],
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $("#countdown").countdown({
    until: new Date(2021, 9, 8),
    format: "D",
  });
  $("#countdown-large").countdown({
    until: new Date(2021, 9, 8),
    format: "DHMS",
  });

  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $(".notify-form").ajaxChimp({
    callback: mailchimpCallback,
    url: "https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900",
  });

  function mailchimpCallback(resp) {
    if (resp.result === "success") {
      $(".notify").find(".form").addClass("is-hidden");
      $(".notify").find(".subscription-ok").addClass("is-visible");
      setTimeout(function () {
        // Done Functions
        $(".notify").find(".subscription-ok").removeClass("is-visible");
        $(".notify").find(".form").delay(300).removeClass("is-hidden");
        $(".notify-form").trigger("reset");
      }, 5000);
    } else if (resp.result === "error") {
      $(".notify").find(".form").addClass("is-hidden");
      $(".notify").find(".subscription-error").addClass("is-visible");
      setTimeout(function () {
        // Done Functions
        $(".notify").find(".subscription-error").removeClass("is-visible");
        $(".notify").find(".form").delay(300).removeClass("is-hidden");
        $(".notify-form").trigger("reset");
      }, 5000);
    }
  }
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Write a Line Form Start
  // --------------------------------------------- //
  $("#writealine-form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      $(".writealine").find(".form").addClass("is-hidden");
      $(".writealine").find(".reply-group").addClass("is-visible");
      setTimeout(function () {
        // Done Functions
        $(".writealine").find(".reply-group").removeClass("is-visible");
        $(".writealine").find(".form").delay(300).removeClass("is-hidden");
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });
  // --------------------------------------------- //
  // Write a Line Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Backgrounds Start
  // --------------------------------------------- //
  $(window).on("load", function () {
    // Space BG - particlesJS
    var bgndSpace = $("#space-js");
    if (bgndSpace.length) {
      particlesJS("space-js", {
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }

    // Triangles BG - particlesJS
    var bgndTriangles = $("#triangles-js");
    if (bgndTriangles.length) {
      particlesJS("triangles-js", {
        particles: {
          number: {
            value: 33,
            density: {
              enable: true,
              value_area: 1420.4657549380909,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "triangle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.06313181133058181,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 11.83721462448409,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }

    // Particles BG - particlesJS
    var bgndParticles = $("#particles-js");
    if (bgndParticles.length) {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  });
  // --------------------------------------------- //
  // ParticlesJS Backgrounds End
  // --------------------------------------------- //
});
