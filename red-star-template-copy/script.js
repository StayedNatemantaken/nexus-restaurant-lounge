const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const intakeForm = document.getElementById('intake-form');
const formMessage = document.getElementById('formMessage');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav?.classList.toggle('open');
});

if (intakeForm) {
  intakeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Thank you! Your intake form has been received for this prototype. We will contact you to confirm your appointment.';
    intakeForm.reset();
  });
}
