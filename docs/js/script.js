window.addEventListener('scroll', () => {
    const scrollOverlay = document.querySelector('.scroll-overlay');
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    scrollOverlay.style.opacity = scrollPercent * 0.5;
});