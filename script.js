// -------------------- NAV BAR SHADOW --------------------
// adds a shadow to the nav bar when you scroll down
// makes it feel more "sticky" and separated from content

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // if scrolled more than 50px, add shadow
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// -------------------- MOBILE MENU --------------------
// hamburger menu for phones/tablets
// toggles the nav links open/closed

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// close the menu when you click a link (so it doesn't stay open)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});


// -------------------- SCROLL ANIMATIONS --------------------
// cards fade in as you scroll down the page
// uses IntersectionObserver to detect when elements enter the viewport

const observerOptions = {
    root: null,           // use the viewport as the root
    rootMargin: '0px',    // no margin
    threshold: 0.1        // trigger when 10% of element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // stagger the animations so cards don't all appear at once
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);  // 100ms delay between each card
        }
    });
}, observerOptions);

// apply the observer to experience cards
document.querySelectorAll('.experience-card').forEach(card => {
    observer.observe(card);
});

// apply the observer to project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});


// -------------------- SMOOTH SCROLL --------------------
// when you click a nav link, smoothly scroll to that section
// also accounts for the fixed header height so content isn't hidden

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // stop the default jump behavior

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;  // height of the fixed nav bar
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
