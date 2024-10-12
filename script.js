// Add scroll animation when user scrolls down the page
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
        document.body.classList.add('scrolled');
    }
});
