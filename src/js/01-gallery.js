// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
`<a class="gallery__item" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}" />
</a> `).join('');

gallery.insertAdjacentHTML("afterbegin", markup)


 new SimpleLightbox(`.gallery a`, {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
