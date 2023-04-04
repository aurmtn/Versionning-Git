const btnToggle = document.getElementById('btn-toggle');
const body = document.body;

btnToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    btnToggle.textContent = 'Désactiver le mode sombre';
  } else {
    btnToggle.textContent = 'Activer le mode sombre';
  }
});

const btnLink = document.getElementById('btn-link');

btnLink.addEventListener('click', () => {
  alert('Vous allez être redirigé vers le lien du repo git !');
  window.location.href = 'https://github.com/aurmtn/Versionning-Git';
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // empêche l'envoi du formulaire
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  if (nom === '' || prenom === '' || email === '' || telephone === '') {
    alert('Veuillez remplir tous les champs du formulaire !');
  } else {
    alert('Merci ! Votre formulaire a bien été envoyé.');
    contactForm.reset(); // réinitialise le formulaire
  }
});
