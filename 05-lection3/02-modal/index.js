(function () {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');
  const modalBackground = document.getElementById('modal-background');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
    modalBackground.style.display = 'block';
    document.body.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackground.style.display = 'none';
    document.body.overflow = 'initial';
  });
})();
