// Track scroll position for direction detection
let lastScrollTop = 0;
let scrollDirection = 'down';

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollTop;
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Set scroll direction class for section items
            if (entry.target.classList.contains('section-item')) {
                if (scrollDirection === 'up') {
                    entry.target.classList.add('scroll-up');
                } else {
                    entry.target.classList.remove('scroll-up');
                }
            }
            entry.target.classList.add('animated');
        } else {
            // Remove animated class when element leaves view
            // Only for section-items to animate the line
            if (entry.target.classList.contains('section-item')) {
                entry.target.classList.remove('animated');
            }
        }
    });
}, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});
const btn = document.querySelector('.btn');

btn.addEventListener('mouseenter', () => {
    btn.classList.remove('deanimated');

    // Force browser reflow
    void btn.offsetWidth;

    btn.classList.add('animated');
});


btn.addEventListener('mouseleave', () => {
    btn.classList.remove('animated');

    // Force browser reflow
    void btn.offsetWidth;

    btn.classList.add('deanimated');
});


document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('backToTop');

  if (!backToTop) {
    console.error('Back to top button not found');
    return;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
