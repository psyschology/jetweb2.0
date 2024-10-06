document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('menu-open');
        nav.classList.toggle('mobile-menu-active');
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.slider-controls .prev');
    const nextButton = document.querySelector('.slider-controls .next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextButton.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    showTestimonial(currentTestimonial);

    // Modal functionality
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');

    function openModal(title, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Service learn more buttons
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', () => {
            const title = button.parentElement.querySelector('h3').textContent;
            const description = button.parentElement.querySelector('p').textContent;
            openModal(title, description);
        });
    });

    // Portfolio view project buttons
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', () => {
            const title = button.parentElement.querySelector('h3').textContent;
            const description = "Detailed project description goes here. This is where you would provide more information about the specific project, its challenges, and the solutions implemented.";
            openModal(title, description);
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We\'ll get back to you soon!');
        form.reset();
    });

    // Scroll reveal animation
    ScrollReveal().reveal('.service-card, .portfolio-item,', { 
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        interval: 100
    });

    // Header background change on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
});