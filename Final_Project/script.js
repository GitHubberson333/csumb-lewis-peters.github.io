const toggleBtns = document.querySelectorAll('.toggle-btn');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cardBody = btn.nextElementSibling;
      cardBody.classList.toggle('show');
    });
  });
