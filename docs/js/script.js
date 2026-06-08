window.addEventListener('scroll', () => {
    const scrollOverlay = document.querySelector('.scroll-overlay');
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    scrollOverlay.style.opacity = scrollPercent * 0.5;
});

let activeItem = null;

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        if (item === activeItem){
            item.classList.remove("active");
            item.blur();
            activeItem = null;
        } else {
            if (activeItem) {
                activeItem.classList.remove("active");
                activeItem.blur();
            }
            item.classList.add("active")
            activeItem = item;
        }
    })
})

document.addEventListener('click', () => {
    if (activeItem) {
        activeItem.classList.remove("active");
        activeItem.blur();
        activeItem = null;
    }
})

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const tier = entry.target;
        tier.querySelectorAll('.item').forEach((item, i) => {
            item.style.animationDelay = `${i * 80}ms`;
        });
        tier.classList.add('revealed');
        revealObserver.unobserve(tier);
    });
}, { threshold: 0.15 });

document.querySelectorAll('.tier').forEach(tier => revealObserver.observe(tier));