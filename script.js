const tabs = document.querySelectorAll('.tab-link');
const sections = document.querySelectorAll('.tab-section');

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formMessage.style.color = '#ff4c4c';
    formMessage.textContent = 'Please fill out all fields.';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.toLowerCase())) {
    formMessage.style.color = '#ff4c4c';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  formMessage.style.color = '#4caf50';
  formMessage.textContent = 'Sending message...';

  setTimeout(() => {
    formMessage.textContent = 'Message sent! Thank you for contacting me.';
    contactForm.reset();
  }, 1500);
});

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    tab.classList.add('active');
    const target = tab.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});
