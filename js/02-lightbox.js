import { galleryItems } from './gallery-items.js';
// Change code below this line


const startContainer = document.querySelector('.gallery');

const createEl = galleryItems.map((item) => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.original}" alt='Image description' title='${item.description}'" />
</a>`);

startContainer.insertAdjacentHTML('beforeend', createEl.join(' '));
console.log(startContainer);

let gallerySet = new SimpleLightbox( '.gallery a', { captionPosition: "bottom", captionDelay: 250 } );

gallerySet.on( 'show.simplelightbox', function () {
    
  return;
} );




