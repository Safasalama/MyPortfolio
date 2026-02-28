// Typed.js

var typed = new Typed(".typed", {
  strings: ["Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 90,
  loop: true
});


// Scroll Animation Helper
function animateOnScroll(selector, threshold = 0.2) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold });
  elements.forEach(el => observer.observe(el));
}

animateOnScroll('#Education .box');
animateOnScroll('#Skills .card');
animateOnScroll('#Services .card');

// Projects - Scroll Animation
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

// Projects - Filter
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

// Contact Form Validation
document.getElementById('form').addEventListener('submit', function (e) {
  let valid = true;
  const fields = ['userName', 'userEmail', 'userSubject', 'message'];

  fields.forEach(id => {
    const input = document.getElementById(id);
    const req = document.getElementById(id + 'Req');
    if (!input.value.trim()) {
      req.classList.remove('d-none');
      valid = false;
    } else {
      req.classList.add('d-none');
    }
  });

  if (!valid) e.preventDefault();
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
backToTopBtn.id = 'backToTop';
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, #CE6D8B, #681C3B);
  color: white;
  border: none;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 4px 15px rgba(206, 109, 139, 0.5);
  z-index: 9999;
  transition: transform 0.3s ease, opacity 0.3s ease;
`;
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = 'flex';
    backToTopBtn.style.opacity = '1';
  } else {
    backToTopBtn.style.opacity = '0';
    setTimeout(() => {
      if (window.scrollY <= 400) backToTopBtn.style.display = 'none';
    }, 300);
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTopBtn.addEventListener('mouseenter', () => {
  backToTopBtn.style.transform = 'translateY(-4px) scale(1.1)';
});
backToTopBtn.addEventListener('mouseleave', () => {
  backToTopBtn.style.transform = 'translateY(0) scale(1)';
});

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.id = 'scrollProgress';
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: linear-gradient(90deg, #681C3B);
  z-index: 99999;
  transition: width 0.1s ease;
`;
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + '%';
});

// Fade-in Images on Scroll
const lazyImages = document.querySelectorAll('img');

lazyImages.forEach(img => {
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.5s ease';
});

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.complete) {
        img.style.opacity = '1';
      } else {
        img.onload = () => { img.style.opacity = '1'; };
      }
      imageObserver.unobserve(img);
    }
  });
}, { threshold: 0.1 });

lazyImages.forEach(img => imageObserver.observe(img));