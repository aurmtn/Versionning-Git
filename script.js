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