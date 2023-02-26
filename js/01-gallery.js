import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const phContainer = document.querySelector('.gallery');
const phCards = createPhCards(galleryItems);



phContainer.addEventListener('click', onClick);
function onClick(evt) {
    evt.preventDefault();
    const instance = basicLightbox.create(`
   
    <img src="${evt.target.dataset.source}">
    
`)
instance.show()
    console.log(evt);
}

phContainer.insertAdjacentHTML('beforeend', phCards);
console.log(phContainer);

function createPhCards (photos) {
return photos.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
        `;
    }).join('');

} 



