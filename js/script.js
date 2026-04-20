// script.js - Simple interaction for the portfolio website

const navToggle = document.querySelector('.mobile-nav-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');
const contactForm = document.querySelector('#contact-form');
const messageBox = document.querySelector('#form-message');

// Show or hide the mobile navigation menu
navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
  });
});

// Smooth scroll and active link highlighting
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 90;

  navLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (!section) return;

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Handle contact form submission with a friendly message
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();

  if (name === '') {
    messageBox.textContent = 'Please add your name before sending the message.';
    messageBox.style.color = '#f87171';
    return;
  }

  messageBox.textContent = `Thanks, ${name}! Your message was received. I will reply soon.`;
  messageBox.style.color = '#a3e635';
  contactForm.reset();
});

// Add fade-up animation to sections after loading
const animatedItems = document.querySelectorAll('.fade-up');
animatedItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.12}s`;
});
