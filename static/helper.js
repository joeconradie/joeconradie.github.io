// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Lazy loading images
const lazyImages = document.querySelectorAll('img.lazy');

const imageObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.onload = () => img.classList.add('loaded');
        obs.unobserve(img);
    }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));