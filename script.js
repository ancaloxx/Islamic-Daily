document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');

    // Fungsi untuk mengubah style navbar saat scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled', 'shadow-md');
            nav.classList.remove('py-6');
            nav.classList.add('py-4');
        } else {
            nav.classList.remove('nav-scrolled', 'shadow-md');
            nav.classList.remove('py-4');
            nav.classList.add('py-6');
        }
    });

    // Opsional: Animasi sederhana munculnya elemen saat scroll (reveal effect)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-item').forEach(el => {
        el.classList.add('transition', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});