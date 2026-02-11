document.addEventListener(‘DOMContentLoaded’, function() {

```
// ROTATING HERO TEXT
const rotatingSpans = document.querySelectorAll('.rotating-text span');
let currentIndex = 0;

function rotateText() {
    rotatingSpans[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % rotatingSpans.length;
    rotatingSpans[currentIndex].classList.add('active');
}

setInterval(rotateText, 4000);

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// INTERSECTION OBSERVER FOR FADE-IN
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project sections
document.querySelectorAll('.project-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});
```

});
