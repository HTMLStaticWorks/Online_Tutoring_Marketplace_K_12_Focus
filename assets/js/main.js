document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // Dark Mode Toggle
    const darkModeToggles = document.querySelectorAll('#darkModeToggle, .dark-mode-toggle');
    if (darkModeToggles.length > 0) {
        darkModeToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // RTL Toggle
    const rtlToggles = document.querySelectorAll('#rtlToggle, .rtl-toggle');
    if (rtlToggles.length > 0) {
        rtlToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const html = document.documentElement;
                const isRtl = html.getAttribute('dir') === 'rtl';
                html.setAttribute('dir', isRtl ? 'ltr' : 'rtl');
                localStorage.setItem('dir', isRtl ? 'ltr' : 'rtl');
            });
        });

        // Load saved direction
        const savedDir = localStorage.getItem('dir');
        if (savedDir === 'rtl') {
            document.documentElement.setAttribute('dir', 'rtl');
        }
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Scroll to Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
