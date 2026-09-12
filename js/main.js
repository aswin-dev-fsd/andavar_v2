
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

    // Phase 3: Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            alert('Mobile menu slide down logic (placeholder)');
        });
    }

    // Phase 3: Sticky Call Bar Time Logic
    const callBtn = document.getElementById('sticky-call-btn');
    if (callBtn) {
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000; 
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const istTime = new Date(utc + istOffset);
        
        const hour = istTime.getHours();
        const day = istTime.getDay();
        
        // Consulting hours: Mon-Sat 10am-2pm, 5pm-7pm
        // In 24h: 10-14, 17-19
        const isSunday = day === 0;
        const isMorning = hour >= 10 && hour < 14;
        const isEvening = hour >= 17 && hour < 19;
        
        if (isSunday || (!isMorning && !isEvening)) {
            callBtn.innerHTML = '<span lang="en">Leave a message</span><span lang="ta">செய்தி அனுப்பவும்</span>';
        }
    }
