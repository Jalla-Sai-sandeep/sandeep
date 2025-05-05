// Select elements
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const fullImage = document.getElementById('full-image');
const closeModal = document.querySelector('.close');

// Filter functionality
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    galleryItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Modal functionality
galleryItems.forEach(item => {
  const img = item.querySelector('img');
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    fullImage.src = img.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
