<script>
  const header = document.querySelector('h1');
  header.addEventListener('click', function() {
    header.textContent = 'Cliquez de nouveau pour revenir à l\'en-tête original'
  });

  header.addEventListener('dblclick', function() {
    header.textContent = 'Bienvenue dans le cours sur GitHub'
  });
</script>
