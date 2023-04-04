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
  alert('Vous allez être redirigé vers le lien !');
  window.location.href = 'https://www.example.com';
});



