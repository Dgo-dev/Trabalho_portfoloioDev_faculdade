const sections = document.querySelectorAll('.scroll-effect');

function checkScroll() {
  sections.forEach(section => {
    const elements = section.querySelectorAll('.hidden');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const threshold = window.innerHeight / 1.5;

      if (elementPosition < threshold && elementPosition > -threshold) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
