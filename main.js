// main.js for TAK Devs website
// Add interactive JavaScript here as needed 

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const dropdowns = document.querySelectorAll('.dropdown');

  function toggleMenu() {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  }

  hamburger.addEventListener('click', toggleMenu);
  hamburger.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  });

  // Handle dropdowns on mobile
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (window.innerWidth <= 900) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      });
    }
  });

  // Close menu when a link is clicked (on mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = '';
      });
    }
  });

  // Testimonial Slider
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function showTestimonial(index) {
    // Remove active class from all items and dots
    testimonialItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current item and dot
    testimonialItems[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentIndex = index;
  }

  function nextTestimonial() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= testimonialItems.length) {
      nextIndex = 0;
    }
    showTestimonial(nextIndex);
  }

  function prevTestimonial() {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = testimonialItems.length - 1;
    }
    showTestimonial(prevIndex);
  }

  // Event listeners
  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
  });

  // Auto-advance testimonials every 5 seconds
  setInterval(nextTestimonial, 5000);
}); 