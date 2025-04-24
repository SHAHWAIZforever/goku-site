// Form Validation
(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Prevent form submission for now
        displayInfo();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();


function displayInfo() {
  var name = document.getElementById("name").value;
  var pic = document.getElementById("pic").files[0];
  var age = document.getElementById("age").value;
  var education = document.getElementById("education").value;
  var contact = document.getElementById("contact").value;
  var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "Not selected";

  var picURL = pic ? URL.createObjectURL(pic) : "https://via.placeholder.com/150"; // Fallback image URL

  var infoHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Profile Picture:</strong></p>
    <p><img src="${picURL}" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%;"></p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <p><strong>Gender:</strong> ${gender}</p>
  `;
  document.getElementById("displayInfo").innerHTML = infoHTML;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Custom Owl Carousel (Pure JS version)
$(document).ready(function() {
  $('#carousel .owl-carousel ').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  });
});


// Custom Owl Carousel (Pure JS version)
$(document).ready(function() {
  $('#smallslide .owl-carousel ').owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  });
});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const accordionButtons = document.querySelectorAll('.accordion-button');
const collapseElements = document.querySelectorAll('.accordion-collapse');
const image = document.getElementById('infoImage');

// Function to enlarge the image
function enlargeImage() {
    image.classList.add('enlarged');
}

// Function to shrink the image
function shrinkImage() {
    image.classList.remove('enlarged');
}

// Add event listeners to handle accordion opening and closing
collapseElements.forEach((collapse) => {
    // When the accordion is opening
    collapse.addEventListener('show.bs.collapse', () => {
        enlargeImage();
    });

    // When the accordion is closing
    collapse.addEventListener('hide.bs.collapse', () => {
        shrinkImage();
    });
});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Grab elements
const progressSection = document.getElementById('progressSection');
const htmlProgressBar = document.querySelector('.html-progress');
const cssProgressBar = document.querySelector('.css-progress');
const jsProgressBar = document.querySelector('.js-progress');
const htmlText = document.getElementById('htmlText');
const cssText = document.getElementById('cssText');
const jsText = document.getElementById('jsText');

// Progress values (can be changed here)
const htmlProgress = 40;
const cssProgress = 57;
const jsProgress = 90;

// Function to update the text and width of progress bars with custom labels
function updateProgressBar(bar, textElement, progress) {
  // Set the width of the progress bar
  bar.style.width = `${progress}%`;

  // Custom text based on progress
  if (bar.classList.contains('html-progress')) {
    textElement.innerText = ` HTML : ${progress}%`;
  } else if (bar.classList.contains('css-progress')) {
    textElement.innerText = ` CSS : ${progress}%`;
  } else if (bar.classList.contains('js-progress')) {
    textElement.innerText = ` JavaScript : ${progress}%`;
  }
}

// Function to animate progress with larger increments
function animateProgress() {
  let html = 0, css = 0, js = 0;
  
  // Function to increase progress bars in larger increments
  function step() {
    let isAnimating = false;
    
    if (html < htmlProgress) {
      html += 5;  // Increase the increment for faster animation
      if (html > htmlProgress) html = htmlProgress;  // Clamp to the max value
      updateProgressBar(htmlProgressBar, htmlText, html);
      isAnimating = true;
    }

    if (css < cssProgress) {
      css += 5;  // Increase the increment for faster animation
      if (css > cssProgress) css = cssProgress;  // Clamp to the max value
      updateProgressBar(cssProgressBar, cssText, css);
      isAnimating = true;
    }

    if (js < jsProgress) {
      js += 5;  // Increase the increment for faster animation
      if (js > jsProgress) js = jsProgress;  // Clamp to the max value
      updateProgressBar(jsProgressBar, jsText, js);
      isAnimating = true;
    }

    if (isAnimating) {
      setTimeout(step, 20);  // Faster, controlled animation with `setTimeout`
    }
  }

  step();
}

// Reset progress
function resetProgress() {
  htmlProgressBar.style.width = '0%';
  cssProgressBar.style.width = '0%';
  jsProgressBar.style.width = '0%';
  htmlText.innerText = ' HTML: 0%';
  cssText.innerText = ' CSS : 0%';
  jsText.innerText = ' JavaScript : 0%';
}

// IntersectionObserver to trigger animations
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      progressSection.classList.add('animate');
      animateProgress();
    } else {
      progressSection.classList.remove('animate');
      resetProgress();
    }
  });
}, { threshold: 0.5 });

progressObserver.observe(progressSection);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Select all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Smooth scroll when clicking on links
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Remove active class from all links and add it to the clicked one
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Add Intersection Observer to detect when sections are in view
const observerOptions = {
  root: null, // Observe intersections relative to the viewport
  threshold: 0.5 // Trigger when 50% of the section is visible
};

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);

    if (entry.isIntersecting) {
      // Add active class when section is in view
      link.classList.add('active');
    } else {
      // Remove active class when section is out of view
      link.classList.remove('active');
    }
  });
}, observerOptions);

// Observe each section in the page
document.querySelectorAll('section').forEach(section => {
  navObserver.observe(section);
});

// Home link smooth scroll (when clicking on the "Home" link)
document.getElementById('homeLink')?.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  // Remove active class from all links and add it to the Home link
  navLinks.forEach(link => link.classList.remove('active'));
  this.classList.add('active');
});



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Typing effect (Auto typing and deleting text)
window.onload = function () {
  const typingEffectElement = document.getElementById('typingEffect');
  const text = "I'm a Web Developer";
  let index = 0;
  const typingSpeed = 150; // Speed for typing
  const deletingSpeed = 100; // Speed for deleting
  const pauseTime = 1000; // Time to pause before starting deletion or typing

  // Function to type the text
  function typeText() {
    if (index < text.length) {
      typingEffectElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, typingSpeed);
    } else {
      // Pause before deleting text
      setTimeout(deleteText, pauseTime);
    }
  }

  // Function to delete the text
  function deleteText() {
    if (index > 0) {
      typingEffectElement.textContent = typingEffectElement.textContent.slice(0, index - 1);
      index--;
      setTimeout(deleteText, deletingSpeed);
    } else {
      // Pause before typing again
      setTimeout(typeText, pauseTime);
    }
  }

  // Start typing effect when page loads
  typeText();
};


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.addEventListener("DOMContentLoaded", function () {
  gsap.to('.popping', {
    y: -15,
    duration: .7,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
})





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// // For mobile touch events
// window.addEventListener('touchstart', handleScroll, false);
// window.addEventListener('touchmove', handleScroll, false);
// window.addEventListener('touchend', handleScroll, false);

// // Scroll event for desktop
// window.addEventListener('scroll', handleScroll, false);

// function handleScroll() {
//   const fadeElements = document.querySelectorAll('.fade-up, .fade-up-1, .fade-up-2, .fade-up-3, .fade-left, .fade-right, .fade-down, .fade-up-slow');
//   fadeElements.forEach(function (element) {
//     const rect = element.getBoundingClientRect();
//     if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//       element.classList.add('visible');
//     } else {
//       element.classList.remove('visible');
//     }
//   });
// }

// Throttled scroll handler
let isScrolling = false;

function handleScroll() {
  if (isScrolling) return;

  isScrolling = true;
  requestAnimationFrame(() => {
    const fadeElements = document.querySelectorAll('.fade-up, .fade-up-1, .fade-up-2, .fade-up-3, .fade-left, .fade-right, .fade-down, .fade-up-slow');
    fadeElements.forEach(function (element) {
      const rect = element.getBoundingClientRect();
      // Add a small buffer (50px) to trigger visibility a bit earlier
      if (rect.top <= window.innerHeight && rect.bottom >= -50) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    isScrolling = false;
  });
}

// For mobile touch events
window.addEventListener('touchstart', handleScroll, false);
window.addEventListener('touchmove', handleScroll, false);
window.addEventListener('touchend', handleScroll, false);

// Scroll event for desktop
window.addEventListener('scroll', handleScroll, false);

// Optionally, call handleScroll on initial page load to show elements that may already be in view
window.addEventListener('load', handleScroll, false);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>dom load

// onload effect (GSAP Animation)
document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo('.camedown', {
    y: -100,
    opacity: 0,
    scale:0.7
  }, {
    y: 0, // ending y position
    opacity: 1,
    scale: 1.05, // corrected scale property
    duration: 1.2,
    ease: "power1.inOut",
  });
});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



gsap.registerPlugin(ScrollTrigger);

// Apply the scroll effect to the navbar
gsap.to(".navbar", {
  scrollTrigger: {
    trigger: "body",  // The body element triggers the scroll event
    start: "top top",  // Start the effect when the top of the body reaches the top of the viewport
    end: "bottom top", // End the effect when the bottom of the body reaches the top of the viewport
    scrub: true         // Smoothly scrub the background color change as the page scrolls
  },
  backgroundColor: "rgba(0, 0, 0, 0.2)",  // Change the navbar background to a semi-transparent black
});
