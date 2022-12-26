import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const divRef = document.querySelector(".gallery");

function createGalleryMarkap(items) {
  return items
    .map(
      (item) => `<div class="gallery__item"> 
    <a class"gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}"
    data-sourse="${item.original}"
    alt="${item.description}"/></a></div>`
    )
    .join("");
}
const addGalleryMarkup = createGalleryMarkap(galleryItems);
divRef.innerHTML = addGalleryMarkup;
divRef.addEventListener("click", onImageClick);
function onImageClick(event) {
  event.preventDefault();
  //   blockStandartAction(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.sourse}" width="800" height="600">
`);
  instance.show();

  divRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
// function blockStandartAction(event) {
//   event.preventDefault();
// }
