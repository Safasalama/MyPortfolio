var typed = new Typed(".typed", {
  strings: ["Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 90,
  loop: true
});
//cards of Education show
const eduCards = document.querySelectorAll('#Education .box');

const eduObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

eduCards.forEach(card => eduObserver.observe(card));
//cards of technical show

const skillCards = document.querySelectorAll('#Skills .card');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

skillCards.forEach(card => skillObserver.observe(card));
//projects
// Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Scroll Animation
const projectCards = document.querySelectorAll('#Projects .project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 150);
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => projectObserver.observe(card));