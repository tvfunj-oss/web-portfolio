// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll(".mobile-link");
mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  });
});

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a, .mobile-link");
  const header = document.getElementById("header");
  const headerHeight = header ? header.offsetHeight : 0;

  let current = "";
  
  // Check if we're at the bottom of the page
  const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 150;
    const sectionBottom = sectionTop + section.clientHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      current = section.getAttribute("id");
    }
  });

  // If at bottom of page, activate the last section (contact)
  if (isBottom) {
    const lastSection = sections[sections.length - 1];
    if (lastSection) {
      current = lastSection.getAttribute("id");
    }
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const linkHref = link.getAttribute("href");
    if (linkHref && linkHref === "#" + current) {
      link.classList.add("active");
    }
  });
});