// HIBRADE Website JavaScript

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Active link highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Portfolio filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Contact form validation and submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    // Load saved data from localStorage
    loadFormData();

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (validateForm()) {
        saveFormData();
        showSuccessMessage();
        contactForm.reset();
        localStorage.removeItem('contactFormData');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section, .service-card, .portfolio-item, .pricing-card').forEach(el => {
    observer.observe(el);
  });

  // Testimonials auto-scroll (if carousel exists)
  const testimonialsCarousel = document.querySelector('.testimonials-carousel');
  if (testimonialsCarousel) {
    setInterval(() => {
      testimonialsCarousel.scrollBy({
        left: 370,
        behavior: 'smooth'
      });

      // Reset to start if at end
      if (testimonialsCarousel.scrollLeft >= testimonialsCarousel.scrollWidth - testimonialsCarousel.clientWidth) {
        testimonialsCarousel.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 5000);
  }
});

// Form validation function
function validateForm() {
  const form = document.getElementById('contactForm');
  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const phone = form.querySelector('#phone');
  const service = form.querySelector('#service');
  const message = form.querySelector('#message');
  let isValid = true;

  // Reset errors
  document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.classList.remove('error');
  });
  document.querySelectorAll('.form-group small').forEach(msg => {
    msg.textContent = '';
  });

  // Validate name
  if (!name.value.trim()) {
    showError(name, 'Name is required');
    isValid = false;
  } else if (name.value.trim().length < 2) {
    showError(name, 'Name must be at least 2 characters');
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    showError(email, 'Please enter a valid email address');
    isValid = false;
  }

  // Validate phone (optional but if provided should be valid)
  if (phone.value.trim()) {
    const phoneRegex = /^[+]?[\d\s-()]+$/;
    if (!phoneRegex.test(phone.value)) {
      showError(phone, 'Please enter a valid phone number');
      isValid = false;
    }
  }

  // Validate service
  if (!service.value) {
    showError(service, 'Please select a service');
    isValid = false;
  }

  // Validate message
  if (!message.value.trim()) {
    showError(message, 'Message is required');
    isValid = false;
  } else if (message.value.trim().length < 10) {
    showError(message, 'Message must be at least 10 characters');
    isValid = false;
  }

  return isValid;
}

function showError(field, message) {
  field.classList.add('error');
  const small = field.parentElement.querySelector('small');
  if (small) {
    small.textContent = message;
  }
}

// Save form data to localStorage
function saveFormData() {
  const form = document.getElementById('contactForm');
  const formData = {
    name: form.querySelector('#name').value,
    email: form.querySelector('#email').value,
    phone: form.querySelector('#phone').value,
    service: form.querySelector('#service').value,
    message: form.querySelector('#message').value,
    savedAt: new Date().toISOString()
  };

  // Save to localStorage
  const submissions = JSON.parse(localStorage.getItem('hibradeSubmissions') || '[]');
  submissions.push(formData);
  localStorage.setItem('hibradeSubmissions', JSON.stringify(submissions));
}

// Load form data from localStorage (for recovery)
function loadFormData() {
  const savedData = localStorage.getItem('contactFormData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    const form = document.getElementById('contactForm');

    if (form) {
      const nameField = form.querySelector('#name');
      const emailField = form.querySelector('#email');
      const phoneField = form.querySelector('#phone');
      const serviceField = form.querySelector('#service');
      const messageField = form.querySelector('#message');

      if (nameField && formData.name) nameField.value = formData.name;
      if (emailField && formData.email) emailField.value = formData.email;
      if (phoneField && formData.phone) phoneField.value = formData.phone;
      if (serviceField && formData.service) serviceField.value = formData.service;
      if (messageField && formData.message) messageField.value = formData.message;
    }
  }

  // Auto-save form data as user types
  const form = document.getElementById('contactForm');
  if (form) {
    const formFields = form.querySelectorAll('input, select, textarea');
    formFields.forEach(field => {
      field.addEventListener('input', () => {
        const formData = {
          name: form.querySelector('#name').value,
          email: form.querySelector('#email').value,
          phone: form.querySelector('#phone').value,
          service: form.querySelector('#service').value,
          message: form.querySelector('#message').value
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
      });
    });
  }
}

function showSuccessMessage() {
  const successMsg = document.getElementById('successMessage');
  if (successMsg) {
    successMsg.classList.add('show');
    setTimeout(() => {
      successMsg.classList.remove('show');
    }, 5000);
  }
}

// Utility function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// View submissions (for admin purposes - could be used in a future admin panel)
function viewSubmissions() {
  const submissions = JSON.parse(localStorage.getItem('hibradeSubmissions') || '[]');
  console.log('Total submissions:', submissions.length);
  submissions.forEach((sub, index) => {
    console.log(`Submission ${index + 1}:`, {
      ...sub,
      formattedDate: formatDate(sub.savedAt)
    });
  });
  return submissions;
}

// Clear submissions (for testing purposes)
function clearSubmissions() {
  localStorage.removeItem('hibradeSubmissions');
  localStorage.removeItem('contactFormData');
  console.log('All submissions cleared');
}

// Expose functions to console for debugging
window.HIBRADE = {
  viewSubmissions,
  clearSubmissions
};
