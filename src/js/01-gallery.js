import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryList = createGalleryItems(galleryItems);
galleryEl.insertAdjacentHTML(`beforeend` , galleryList )

function createGalleryItems(galleryItems) {
    return galleryItems.map((galleryItems) => 
    `<a class="gallery__item" href="${galleryItems.original}">
    <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
</a>` )
       .join("");
 }
 const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

galleryEl.addEventListener('click', lightbox);