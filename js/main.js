document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                scrollToTopBtn.classList.add('opacity-100');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                scrollToTopBtn.classList.remove('opacity-100');
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Mobile menu functionality
    const menuButton = document.querySelector('.md\\:hidden');
    const nav = document.querySelector('header nav');
    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            const mobileNav = document.querySelector('#mobile-nav');
            if (mobileNav) {
                mobileNav.classList.toggle('hidden');
            }
        });
    }
});
