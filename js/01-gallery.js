import { galleryItems } from './gallery-items.js';
// // Change code below this line

const galleryContainer = document.querySelector('.gallery');

//const arrayGalleryItems = galleryItems;

const createContainer = galleryItems.map((items) => `<div class="gallery__item">
  <a class="gallery__link"  href="#">
    <img
      class="gallery__image"
      src="${items.original}"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
`);

galleryContainer.insertAdjacentHTML('beforeend', createContainer.join(''));

galleryContainer.addEventListener('click', onOriginalImage)

function onOriginalImage(event) {
    event.preventDefault();
    const instance = basicLightbox.create(`<img src='${event.target.src}'>`);
    instance.show()
    window.addEventListener('keyup', (even) => {
        if (even.key === 'Escape') {
            instance.close()
        }
    })
};

