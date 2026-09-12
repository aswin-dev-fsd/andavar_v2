
document.addEventListener('DOMContentLoaded', () => {
    // 1. Bilingual Engine
    const html = document.documentElement;
    const currentLang = localStorage.getItem('andavar_lang') || 'en';
    html.setAttribute('data-lang', currentLang);

    window.toggleLanguage = function() {
        const lang = html.getAttribute('data-lang') === 'en' ? 'ta' : 'en';
        html.setAttribute('data-lang', lang);
        localStorage.setItem('andavar_lang', lang);
    };

    // 2. Motion System (IntersectionObserver)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });
    } else {
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            el.classList.add('is-visible');
        });
    }
});
