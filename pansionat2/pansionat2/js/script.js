document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabs a[data-tab]');
  const grid = document.querySelector('.gallery__grid');

  if (!tabs.length || !grid) return;

  const images = Array.from(grid.querySelectorAll('img'));

  const sets = {
    yard: [
      'assets/gallery4.jpg',
      'assets/gallery5.jpg',
      'assets/gallery3.jpg',
      'assets/gallery1.jpg',
      'assets/gallery2.jpg',
      'assets/gallery6.jpg',
      'assets/gallery7.jpg',
      'assets/gallery8.jpg',
      'assets/gallery9.jpg'
    ],
    rooms: [
      'assets/trust.png',
      'assets/promo.png',
      'assets/gallery2.jpg',
      'assets/gallery1.jpg',
      'assets/gallery6.jpg',
      'assets/gallery5.jpg',
      'assets/gallery8.jpg',
      'assets/gallery4.jpg',
      'assets/gallery3.jpg'
    ],
    leisure: [
      'assets/gallery1.jpg',
      'assets/gallery2.jpg',
      'assets/gallery3.jpg',
      'assets/gallery4.jpg',
      'assets/gallery5.jpg',
      'assets/gallery6.jpg',
      'assets/gallery7.jpg',
      'assets/gallery8.jpg',
      'assets/gallery9.jpg'
    ],
    holidays: [
      'assets/gallery2.jpg',
      'assets/gallery1.jpg',
      'assets/gallery8.jpg',
      'assets/gallery7.jpg',
      'assets/gallery5.jpg',
      'assets/gallery3.jpg',
      'assets/gallery4.jpg',
      'assets/gallery6.jpg',
      'assets/gallery9.jpg'
    ],
    video: [
      'assets/gallery3.jpg',
      'assets/gallery2.jpg',
      'assets/gallery1.jpg',
      'assets/gallery6.jpg',
      'assets/gallery5.jpg',
      'assets/gallery4.jpg',
      'assets/gallery9.jpg',
      'assets/gallery8.jpg',
      'assets/gallery7.jpg'
    ]
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
      event.preventDefault();

      tabs.forEach(item => item.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.dataset.tab;
      const selected = sets[key] || sets.leisure;

      grid.classList.add('is-changing');

      setTimeout(() => {
        images.forEach((img, index) => {
          img.src = selected[index % selected.length];
        });

        grid.classList.remove('is-changing');
      }, 180);
    });
  });
});
