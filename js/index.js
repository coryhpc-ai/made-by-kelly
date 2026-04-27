// js/index.js - Hero Slideshow

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Auto slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Click on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});

// Best Sellers collage - stack up when scrolling down
document.addEventListener('DOMContentLoaded', () => {
    const imagesSide = document.querySelector('.images-side');
    if (!imagesSide) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const images = entry.target.querySelectorAll('.collage-img');
                images.forEach(img => {
                    img.classList.add('visible');
                });
                observer.unobserve(entry.target);   // run only once
            }
        });
    }, {
        threshold: 0.3   // trigger when 30% of the section is visible
    });

    observer.observe(imagesSide);
});


// Auto-rotating image slider - slower speed
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto rotate every 6 seconds (slower)
    function startAutoRotate() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    // Click on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            currentSlide = index;
            showSlide(currentSlide);
            startAutoRotate();
        });
    });

    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    sliderContainer.addEventListener('mouseleave', startAutoRotate);

    // Initialize
    showSlide(0);
    startAutoRotate();
});

// Stripe Pay Button
document.addEventListener('DOMContentLoaded', () => {
    const payBtn = document.getElementById('stripe-pay-btn');
    
    if (payBtn) {
        payBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const stripe = Stripe('pk_test_51TNEUPF3UWQSLmNchWrqleDKKFTeWXk6V8o9ZNzYPrW7DLoNwyS2GkAukaCCJQ0aycoPCI7QkngYV8KF6P1Ls5OE007O85rj0m');

            // For now, we'll use a simple redirect to Stripe Checkout
            // Later we can make it dynamic with amount etc.
            window.location.href = "https://buy.stripe.com/test_your_link_here"; 
            // ← Replace this with your actual Stripe Payment Link
        });
    }
});



// Testimonials Carousel - Square Style
let currentSlide = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-card');

function updateTestimonials() {
    testimonialSlides.forEach((slide, index) => {
        slide.classList.remove('active', 'left', 'right');
        
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index === (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length) {
            slide.classList.add('left');
        } else if (index === (currentSlide + 1) % testimonialSlides.length) {
            slide.classList.add('right');
        }
    });
}

function nextTestimonial() {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    updateTestimonials();
}

// Auto rotate every 6 seconds
setInterval(nextTestimonial, 6000);

// Initialize
updateTestimonials();
// Mobile Menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}